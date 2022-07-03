using WorkScheduler.DAL.Entities.Abstract;

namespace WorkScheduler.DAL.Entities
{
    public class Service : Entity
    {
        public decimal Cost { get; set; }
        //in minutes
        public int DurationTime { get; set; }
        public ServiceType ServiceType { get; set; }
    }
}
