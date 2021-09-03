using Data.Models;
using Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MariaDBAPI.Controllers
{
    public class ProdutoController : BaseController<Produto, ProdutoRepository>
    {
    }
}
