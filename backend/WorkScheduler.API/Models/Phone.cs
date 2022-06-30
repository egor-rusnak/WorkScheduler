namespace WorkScheduler.API.Models
{
    using WorkScheduler.API.Models.Abstract;

    public class Phone : EntityAudit
    {
        public User User { get; set; }
        public string Number { get; set; }
    }
}
