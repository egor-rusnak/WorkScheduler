﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpPut("/[controller]/Update/{recordId}")]
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

        [HttpDelete("/[controller]/Delete/{recordId}")]
        public void Delete(Guid recordId)
        {
            _serviceService.DeleteService(recordId);
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

        [HttpDelete("/[controller]/Types/Delete/{recordId}")]
        public void DeleteType(Guid recordId)
        {
            _serviceService.DeleteServiceType(recordId);
        }
    }
}
