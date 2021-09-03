using Data.Models;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MariaDBAPI.Controllers
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
            repository.Create(model);
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
