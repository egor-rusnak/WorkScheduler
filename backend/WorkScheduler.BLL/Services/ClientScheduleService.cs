using AutoMapper;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.DAL.Context;
using WorkScheduler.Shared.DTOs.Schedule;

namespace WorkScheduler.BLL.Services
{
    public class ClientScheduleService : BaseService, IScheduleService
    {
        public ClientScheduleService(WorkSchedulerContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public ScheduleDto CreateSchedule(CreateScheduleDto scheduleDto)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ScheduleDto> GetClientSchedules(Guid clientId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ScheduleDto> GetEmployeeSchedules(Guid employeeId)
        {
            throw new NotImplementedException();
        }

        public ScheduleDto GetSchedule(Guid scheduleId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ScheduleDto> GetUserSchedules(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
