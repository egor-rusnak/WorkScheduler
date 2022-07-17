namespace WorkScheduler.Shared.DTOs.Schedule
{
    public class CreateScheduleDto
    {
        public Guid ClientId { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid ServiceId { get; set; }
        public DateTime DateTimeStartSchedule { get; set; }
        public DateTime? DateTimeEndSchedule { get; set; }
        public decimal? CustomCost { get; set; }
    }
}
