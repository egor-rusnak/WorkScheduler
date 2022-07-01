namespace WorkScheduler.DAL.Entities.Abstract
{
    public class EntityAudit : BaseEntity
    {
        public EntityAudit()
        {
            CreatedOn = DateTimeOffset.UtcNow;
        }

        public Guid? CreatedById { get; set; }
        public DateTimeOffset CreatedOn { get; init; }
    }
}
