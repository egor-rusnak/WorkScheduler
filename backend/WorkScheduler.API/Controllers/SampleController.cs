using Microsoft.AspNetCore.Mvc;

namespace WorkScheduler.API.Controllers
{
    public class SampleController : Controller
    {
        [HttpGet("Index")]
        public ActionResult<string> Index()
        {
            return Ok("Test");
        }
    }
}
