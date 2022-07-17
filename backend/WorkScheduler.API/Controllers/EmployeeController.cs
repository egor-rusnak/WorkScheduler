using Microsoft.AspNetCore.Mvc;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.API.Controllers
{
    [ApiController()]
    [Route("[controller]/[action]")]
    public class EmployeesController : Controller
    {
        private readonly IEmployeeService _employeeService;

        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CreateUserDto>> Index()
        {
            return Ok(_employeeService.GetAll());
        }

        [HttpPost]
        public ActionResult<EmployeeDto> Create(EmployeeDto employeeDto)
        {
            return _employeeService.Create(employeeDto);
        }
    }
}
