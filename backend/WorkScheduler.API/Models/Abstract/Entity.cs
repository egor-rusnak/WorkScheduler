namespace WorkScheduler.API.Models.Abstract
{
    using System.ComponentModel.DataAnnotations;

    public class Entity
    {
        public Entity()
        {
            Id = Guid.NewGuid();
            CreatedDate = DateTimeOffset.UtcNow;
        }

        [Key]
        public Guid Id { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
    }
}
