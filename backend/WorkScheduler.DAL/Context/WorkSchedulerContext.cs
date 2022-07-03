using Microsoft.EntityFrameworkCore;
using WorkScheduler.DAL.Context.EntityConfigurations;
using WorkScheduler.DAL.Entities;

namespace WorkScheduler.DAL.Context
{
    public class WorkSchedulerContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<ProvidedService> ProvidedServices { get; set; }
        public DbSet<ScheduledService> ScheduledServices { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<ServiceType> ServiceTypes { get; set; }

        public WorkSchedulerContext(DbContextOptions options) : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserConfig).Assembly);
        }
    }
}
