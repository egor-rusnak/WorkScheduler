using WorkScheduler.DAL.Models.Abstract;

namespace WorkScheduler.DAL
{
    public class User : EntityAudit
    {
        public string Name { get; set; }

        public ICollection<Phone> Phones { get; set; } = new List<Phone>();

    }
}
