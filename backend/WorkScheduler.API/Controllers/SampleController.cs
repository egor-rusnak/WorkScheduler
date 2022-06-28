using Microsoft.AspNetCore.Mvc;
using WorkScheduler.API.Models;

namespace WorkScheduler.API.Controllers
{
    public class SampleController : Controller
    {
        public SampleController(WorkSchedulerContext workSchedulerContext)
        {
        }

        [HttpGet("Index")]
        public ActionResult<string> Index()
        {
            return Ok("Test");
        }
    }
}
