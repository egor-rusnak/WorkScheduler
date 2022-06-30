using WorkScheduler.DAL.Models.Abstract;

namespace WorkScheduler.DAL
{
    public class Phone : EntityAudit
    {
        public User User { get; set; }

        public string Number { get; set; }

    }
}
