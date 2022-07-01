using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IServiceService
    {
        public CreateServiceDto Create(CreateServiceDto dto);
        public IEnumerable<CreateServiceDto> GetAllServices();
    }
}
