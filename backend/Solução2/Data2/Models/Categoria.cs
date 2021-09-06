using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    [Table("Categorias")]
    public class Categoria : Base
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}
