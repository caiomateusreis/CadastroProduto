using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Data.Context;

namespace Data.Repository
{
    public abstract class BaseRepository<T> where T : Base
    {
        public virtual void Create(T model)
        {
            using (var context = new DataBaseContext())
            {
                context.Set<T>().Add(model);
                context.SaveChanges();
            }
        }

        public virtual T Read(int Id)
        {
            T model = Activator.CreateInstance<T>();

            using (var context = new DataBaseContext())
            {
                model = context.Set<T>().Find(Id);
            }
            return model;
        }

        public virtual List<T> Read()
        {
            List<T> lista = new List<T>();
            using (var context = new DataBaseContext())
            {
                lista = context.Set<T>().ToList();
            }
            return lista;
        }

        public virtual void Update(T model)
        {
            using (var context = new DataBaseContext())
            {
                context.Entry<T>(model).State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        public virtual void Delete(int Id)
        {
            using (var context = new DataBaseContext())
            {

                context.Entry<T>(Read(Id)).State = EntityState.Deleted;
                context.SaveChanges();
            }
        }
    }
}