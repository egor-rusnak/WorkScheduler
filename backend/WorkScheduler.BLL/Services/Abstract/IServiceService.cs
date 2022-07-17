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
        ServiceDto GetService(Guid recordId);
        CreateServiceDto Update(Guid recordId, CreateServiceDto userDto);
        CreateServiceTypeDto UpdateType(Guid recordId, CreateServiceTypeDto serviceTypeDto);
        ServiceTypeDto GetServiceType(Guid recordId);
        void DeleteService(Guid recordId);
        void DeleteServiceType(Guid recordId);
    }
}
