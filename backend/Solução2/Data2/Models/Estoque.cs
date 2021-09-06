using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    [Table("Estoque")]
    public class Estoque : Base
    {
        public int Quantidade { get; set; }
        public Produto Produto { get; set; }
    }
}
