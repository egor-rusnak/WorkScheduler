using AutoMapper;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.DAL.Context;
using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.Services
{
    public class ServiceService : BaseService, IServiceService
    {
        public ServiceService(WorkSchedulerContext context, IMapper mapper) : base(context, mapper)
        { }

        public CreateServiceDto Create(CreateServiceDto dto)
        {
            var service = _mapper.Map<Service>(dto);

            _context.Add(service);
            _context.SaveChanges();

            return _mapper.Map<CreateServiceDto>(service);
        }

        public IEnumerable<CreateServiceDto> GetAllServices()
        {
            throw new NotImplementedException();
        }
    }
}
