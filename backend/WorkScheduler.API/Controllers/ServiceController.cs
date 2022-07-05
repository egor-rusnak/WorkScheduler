using Microsoft.AspNetCore.Mvc;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.Shared.DTOs.Service;

namespace WorkScheduler.API.Controllers
{
    [ApiController()]
    [Route("[controller]/[action]")]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceService _serviceService;

        public ServiceController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        [HttpPost("/[controller]/Types/Create")]
        public ActionResult<CreateServiceDto> Create(CreateServiceDto userDto)
        {
            return _serviceService.Create(userDto);
        }

        [HttpGet("/[controller]/Types/GetAllServices")]
        public ActionResult<IEnumerable<ServiceDto>> GetAllServices()
        {
            return Ok(_serviceService.GetAllServices());
        }

        [HttpPost("/[controller]/Types/CreateType")]
        public ActionResult<CreateServiceTypeDto> CreateType(CreateServiceTypeDto serviceTypeDto)
        {
            return _serviceService.CreateType(serviceTypeDto);
        }

        [HttpGet("/[controller]/Types/GetAllServiceTypes")]
        public ActionResult<IEnumerable<ServiceDto>> GetAllServiceTypes()
        {
            return Ok(_serviceService.GetAllServiceTypes());
        }
    }
}
