using WorkScheduler.Shared.DTOs.Service;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IServiceService
    {
        CreateServiceDto Create(CreateServiceDto dto);
        IEnumerable<ServiceDto> GetAllServices();
        CreateServiceTypeDto CreateType(CreateServiceTypeDto serviceTypeDto);
        IEnumerable<ServiceTypeDto> GetAllServiceTypes();
        IEnumerable<ServiceDto> GetServicesByType(Guid typeId);
    }
}
