using WorkScheduler.Shared.DTOs.Service;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IServiceService
    {
        public CreateServiceDto Create(CreateServiceDto dto);
        public IEnumerable<ServiceDto> GetAllServices();
        public CreateServiceTypeDto CreateType(CreateServiceTypeDto serviceTypeDto);
        public IEnumerable<ServiceTypeDto> GetAllServiceTypes();
    }
}
