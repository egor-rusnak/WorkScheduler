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
        public IActionResult GetUserSchedules(Guid userId)
        {
            return Ok();
        }
    }
}
