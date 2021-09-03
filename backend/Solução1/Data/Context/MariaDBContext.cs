using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Context
{
    class MariaDBContext
    {
        class DataBaseContext : DbContext
        {
            public DbSet<Produto> Produtos { get; set; }
            public DbSet<Categoria> Categorias { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                //optionsBuilder.UseMySql();
            }
        }
    }
}
