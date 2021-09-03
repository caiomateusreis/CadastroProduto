using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Context
{
    class DataBaseContext : DbContext
    {
            public DbSet<Produto> Produtos { get; set; }
            public DbSet<Categoria> Categorias { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseNpgsql("Server=localhost;Database=nova;User ID=teste;Password=teste123;Port=5432");
            }
    }
}
