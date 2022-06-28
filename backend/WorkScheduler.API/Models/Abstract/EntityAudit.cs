namespace WorkScheduler.API.Models.Abstract
{
    public class EntityAudit : Entity
    {
        public EntityAudit()
        {
            RegistrationDate = DateTimeOffset.UtcNow;
        }

        public DateTimeOffset RegistrationDate { get; set; }
        public User CreatedBy { get; set; }
    }
}
