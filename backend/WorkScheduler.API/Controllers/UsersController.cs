using Microsoft.AspNetCore.Mvc;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.API.Controllers
{
    [ApiController()]
    [Route("[controller]/[action]")]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CreateUserDto>> Index()
        {
            return Ok(_userService.GetAllUsers());
        }

        [HttpPost]
        public ActionResult<CreateUserDto> Create(CreateUserDto userDto)
        {
            return _userService.Create(userDto);
        }
    }
}
