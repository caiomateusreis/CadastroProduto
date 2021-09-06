using Data.Models;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProdutoAPI.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web_API_MySQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstoqueController : BaseController <Estoque, EstoqueRepository>
    {
    }
}
