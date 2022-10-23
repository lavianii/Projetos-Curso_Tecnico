using Microsoft.EntityFrameworkCore;
using ProjetoEscola_API.Models;
using System.Diagnostics.CodeAnalysis;

namespace ProjetoEscola_API.Data
{
    public class CursoContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public CursoContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }

        public DbSet<Curso>? Curso { get; set; }
    }
}