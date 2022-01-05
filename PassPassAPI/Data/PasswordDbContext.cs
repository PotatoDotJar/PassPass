using Microsoft.EntityFrameworkCore;
using PassPassAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PassPassAPI.Data
{
    public class PasswordDbContext : DbContext
    {
        public string DbPath { get; }

        public PasswordDbContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = Path.Join(path, "Password.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite($"Data Source={DbPath}");
        }

        public DbSet<PasswordRecord> PasswordRecords { get; set; }
    }
}
