namespace WorkScheduler.DAL.Entities.Abstract
{
    public class BaseEntity
    {
        public BaseEntity()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; init; }
    }
}
