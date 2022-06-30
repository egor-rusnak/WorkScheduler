namespace WorkScheduler.DAL.Models.Abstract
{
    public class EntityAudit : Entity
    {
        public EntityAudit()
        {
            CreatedOn = DateTimeOffset.UtcNow;
        }

        public Guid? CreatedById { get; set; }

        public DateTimeOffset CreatedOn { get; set; }

    }
}
