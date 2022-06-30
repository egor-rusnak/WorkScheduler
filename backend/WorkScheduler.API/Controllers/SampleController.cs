using Microsoft.AspNetCore.Mvc;
using WorkScheduler.API.DTOs;
using WorkScheduler.API.Models;
using WorkScheduler.API.Services;

namespace WorkScheduler.API.Controllers
{
    [ApiController]
    public class SampleController : Controller
    {
        public SampleController(UserService userService)
        {
            UserService = userService;
        }

        public UserService UserService { get; }

        [HttpGet("Index")]
        public ActionResult<string> Index()
        {
            return Ok("Test");
        }

        [HttpPost("SaveUser")]
        public ActionResult<UserDto> SaveUser(UserDto userDto)
        {
            return UserService.Create(userDto);
        }
    }
}
