using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WorkScheduler.DAL.Entities;

namespace WorkScheduler.DAL.Context.EntityConfigurations
{
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasMany(u => u.ClientSchedules)
                .WithOne(sc => sc.Client)
                .OnDelete(DeleteBehavior.ClientCascade);
                
            builder.HasDiscriminator(t => t.UserType)
                .HasValue<User>(UserType.User)
                .HasValue<Employee>(UserType.Employee);
        }
    }
}
