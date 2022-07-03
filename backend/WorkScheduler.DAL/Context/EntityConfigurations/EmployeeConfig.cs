using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WorkScheduler.DAL.Entities;

namespace WorkScheduler.DAL.Context.EntityConfigurations
{
    public class EmployeeConfig : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.HasMany(e => e.EmployeeSchedules)
                .WithOne(sc => sc.Employee)
                .OnDelete(DeleteBehavior.ClientCascade);
        }
    }
}
