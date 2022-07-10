using Microsoft.AspNetCore.Mvc;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.Shared.DTOs.Service;

namespace WorkScheduler.API.Controllers
{
    [ApiController()]
    [Route("[controller]/[action]")]
    public class ServicesController : ControllerBase
    {
        private readonly IServiceService _serviceService;

        public ServicesController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        [HttpPost("/[controller]/Create")]
        public ActionResult<CreateServiceDto> Create(CreateServiceDto userDto)
        {
            return _serviceService.Create(userDto);
        }

        [HttpPut("/[controller]/Update")]
        public ActionResult<CreateServiceDto> Update(Guid recordId, CreateServiceDto userDto)
        {
            return _serviceService.Update(recordId, userDto);
        }

        [HttpGet("/[controller]/GetAllServices/{typeId}")]
        public ActionResult<IEnumerable<ServiceDto>> GetAllServices(Guid typeId)
        {
            return Ok(_serviceService.GetServicesByType(typeId));
        }

        [HttpGet("/[controller]/GetService/{recordId}")]
        public ActionResult<ServiceDto> GetService(Guid recordId)
        {
            return Ok(_serviceService.GetService(recordId));
        }

        [HttpPost("/[controller]/Types/CreateType")]
        public ActionResult<CreateServiceTypeDto> CreateType(CreateServiceTypeDto serviceTypeDto)
        {
            return _serviceService.CreateType(serviceTypeDto);
        }

        [HttpPut("/[controller]/Types/UpdateType/{recordId}")]
        public ActionResult<CreateServiceTypeDto> UpdateType(Guid recordId, CreateServiceTypeDto serviceTypeDto)
        {
            return _serviceService.UpdateType(recordId, serviceTypeDto);
        }

        [HttpGet("/[controller]/Types/GetAllServiceTypes")]
        public ActionResult<IEnumerable<ServiceTypeDto>> GetAllServiceTypes()
        {
            return Ok(_serviceService.GetAllServiceTypes());
        }

        [HttpGet("/[controller]/Types/GetServiceType/{recordId}")]
        public ActionResult<ServiceTypeDto> GetServiceType(Guid recordId)
        {
            return Ok(_serviceService.GetServiceType(recordId));
        }
    }
}
