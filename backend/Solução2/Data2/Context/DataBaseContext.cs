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
            public DbSet<Estoque> Categorias { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseMySql("user id = root; server = 192.168.0.157; persistsecurityinfo = True; port = 3309; database = testemyql; Pwd = teste123", new MySqlServerVersion(new Version()));
            }
    }
}
