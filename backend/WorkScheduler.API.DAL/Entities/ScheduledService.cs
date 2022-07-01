using WorkScheduler.DAL.Entities.Abstract;

namespace WorkScheduler.DAL.Entities
{
    public class ScheduledService : EntityAudit
    {
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public Employee Employee { get; set; }
        public User Client { get; set; }
        public ProvidedService Procedure { get; set; }
        public decimal Cost { get; set; }
    }
}
