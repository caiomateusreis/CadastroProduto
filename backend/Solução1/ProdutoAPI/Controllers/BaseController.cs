using Data.Models;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProdutoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<M, R> : ControllerBase where M : Base where R : BaseRepository<M>
    {
        R repository = Activator.CreateInstance<R>();
        [HttpGet]
        public List<M> Get()
        {

            return repository.Read();
        }

        [HttpGet("{id}")]
        public M Get(int Id)
        {
            return repository.Read(Id);
        }

        [HttpPost]
        public void Post([FromBody] M model)
        {
            var factory = new ConnectionFactory() { HostName = "192.168.0.157" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body.ToArray();
                    var produto = System.Text.Json.JsonSerializer.Deserialize<Produto>(body);
                };
                channel.BasicConsume(queue: "produto_queue",
                                                            autoAck: true,
                                                            consumer: consumer);
            }
        }

        [HttpPut("{id}")]
        public void Put(int Id, [FromBody] M model)
        {
            repository.Update(model);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repository.Delete(id);
        }
    }
}
