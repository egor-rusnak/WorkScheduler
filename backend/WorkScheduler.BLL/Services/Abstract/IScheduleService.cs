using WorkScheduler.Shared.DTOs.Schedule;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IScheduleService
    {
        IEnumerable<ScheduleDto> GetClientSchedules(Guid clientId);
        IEnumerable<ScheduleDto> GetEmployeeSchedules(Guid employeeId);
        ScheduleDto CreateSchedule(CreateScheduleDto scheduleDto);
    }
}
