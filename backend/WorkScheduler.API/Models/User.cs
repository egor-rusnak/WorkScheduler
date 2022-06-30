namespace WorkScheduler.API.Models
{
    using WorkScheduler.API.Models.Abstract;

    public class User : EntityAudit
    {
        public string Name { get; set; }
        public ICollection<Phone> Phones { get; set; } = new List<Phone>();
    }
}
