using WorkScheduler.Shared.DTOs.Service;

namespace WorkScheduler.Shared.DTOs.Schedule
{
    public class ScheduleDto
	{
		public Guid Id { get; set; }
		public DateTime StartDateTime { get; set; }
		public DateTime EndDateTime { get; set; }
		public EmployeeDto Employee { get; set; }
		public UserDto Client { get; set; }
		public ServiceDto Procedure { get; set; }
	}
}
