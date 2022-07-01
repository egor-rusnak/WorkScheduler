using WorkScheduler.DAL.Entities.Abstract;

namespace WorkScheduler.DAL.Entities
{
    public class User : EntityAuditWithName
    {
        public ICollection<Phone> Phones { get; set; } = new List<Phone>();
    }
}
