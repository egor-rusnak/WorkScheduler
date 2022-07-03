namespace WorkScheduler.DAL.Entities
{
    public class Employee : User
    {

        public ICollection<ProvidedService> ProvidedServices { get; set; }

        public ICollection<ScheduledService> EmployeeSchedules { get; set; }

    }
}
