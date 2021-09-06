using Data.Models;
using Data.Repository;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Text;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            ProdutoRepository repository = new ProdutoRepository();
            
            var factory = new ConnectionFactory() { HostName = "192.168.0.157" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body.ToArray();
                    var produto = System.Text.Json.JsonSerializer.Deserialize<Produto>(body);
                    Console.WriteLine(" [x] Received {0}", produto.Nome);
                if (model != null)
                {
                        repository.Create(produto);
                }
                };
                channel.BasicConsume(queue: "produto_queue",
                                                            autoAck: true,
                                                            consumer: consumer);
                Console.WriteLine(" Press [enter] to exit.");
                Console.ReadLine();
            }
        }
    }
}
