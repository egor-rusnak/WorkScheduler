namespace WorkScheduler.API.Models.Abstract
{
    using System.ComponentModel.DataAnnotations;

    public class Entity
    {
        public Entity()
        {
            Id = Guid.NewGuid();
        }

        [Key]
        public Guid Id { get; set; }
    }
}
