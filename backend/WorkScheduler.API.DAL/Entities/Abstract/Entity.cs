namespace WorkScheduler.DAL.Models.Abstract
{
    public class Entity
    {
        public Entity()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }

    }
}
