using WorkScheduler.Shared.DTOs.Schedule;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IScheduleService
    {
        IEnumerable<ScheduleDto> GetUserSchedules(Guid userId);
        ScheduleDto GetSchedule(Guid scheduleId);
        ScheduleDto CreateSchedule(CreateScheduleDto scheduleDto);
    }
}
