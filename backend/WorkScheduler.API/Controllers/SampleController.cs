using Microsoft.AspNetCore.Mvc;
using WorkScheduler.API.Models;
using WorkScheduler.API.Services;

namespace WorkScheduler.API.Controllers
{
    public class SampleController : Controller
    {
        public SampleController(UserService userService)
        {
        }

        [HttpGet("Index")]
        public ActionResult<string> Index()
        {
            return Ok("Test");
        }
    }
}
