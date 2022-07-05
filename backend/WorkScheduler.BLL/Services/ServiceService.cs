using AutoMapper;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.DAL.Context;
using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs.Service;

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

        public IEnumerable<ServiceDto> GetAllServices()
        {
            return _mapper.Map<IEnumerable<ServiceDto>>(_context.Services);
        }

        public CreateServiceTypeDto CreateType(CreateServiceTypeDto serviceTypeDto)
        {
            var serviceType = _mapper.Map<ServiceType>(serviceTypeDto);

            _context.Add(serviceType);
            _context.SaveChanges();

            return _mapper.Map<CreateServiceTypeDto>(serviceType);
        }

        public IEnumerable<ServiceTypeDto> GetAllServiceTypes()
        {
            return _mapper.Map<IEnumerable<ServiceTypeDto>>(_context.ServiceTypes);
        }
    }

}
