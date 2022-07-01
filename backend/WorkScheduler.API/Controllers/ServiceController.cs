using Microsoft.AspNetCore.Mvc;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.API.Controllers
{
    [ApiController()]
    [Route("[controller]/[action]")]
    public class ServiceController : Controller
    {
        private readonly IServiceService _serviceService;

        public ServiceController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        [HttpPost]
        public ActionResult<CreateServiceDto> Create(CreateServiceDto userDto)
        {
            return _serviceService.Create(userDto);
        }

        [HttpPost("/[controller]/Types/Create")]
        public ActionResult<CreateServiceDto> CreateType(CreateServiceDto userDto)
        {
            return _serviceService.Create(userDto);
        }
    }
}
