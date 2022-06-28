namespace WorkScheduler.API.Models.Abstract
{
    public class EntityAudit : Entity
    {
        public EntityAudit()
        {
            CreatedDate = DateTimeOffset.UtcNow;
        }

        public User CreatedBy { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
    }
}
