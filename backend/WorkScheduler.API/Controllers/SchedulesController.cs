using Microsoft.AspNetCore.Mvc;
using WorkScheduler.BLL.Services.Abstract;

namespace WorkScheduler.API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class SchedulesController : ControllerBase
    {
        private readonly IScheduleService _scheduleService;

        public SchedulesController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        [HttpGet]
        public IActionResult GetClientSchedules(Guid userId)
        {
            return Ok(_scheduleService.GetClientSchedules(userId));
        }

        [HttpGet]
        public IActionResult GetEmployeeSchedules(Guid employeeId)
        {
            return Ok(_scheduleService.GetEmployeeSchedules(employeeId));
        }
    }
}
