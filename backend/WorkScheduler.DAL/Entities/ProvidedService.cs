using WorkScheduler.DAL.Entities.Abstract;

namespace WorkScheduler.DAL.Entities
{
    public class ProvidedService : BaseEntity
    {
        public Employee Employee { get; set; }
        public Service Service { get; set; }
        public decimal Cost { get; set; }
        public int DurationTime { get; set; }
    }
}
