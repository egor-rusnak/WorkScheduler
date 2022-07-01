using WorkScheduler.DAL.Entities.Abstract;

namespace WorkScheduler.DAL.Entities
{
    public enum UserType
    {
        User = 0,
        Employee = 1
    }
    public class User : Entity
    {
        public ICollection<Phone> Phones { get; set; } = new List<Phone>();
        public ICollection<ScheduledService> ClientSchedules { get; set; }
        public UserType UserType { get; set; }
    }
}
