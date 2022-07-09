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

        public IEnumerable<ServiceDto> GetServicesByType(Guid typeId)
        {
            var services = _context.Services.Where(s => s.ServiceTypeId == typeId);
            return _mapper.Map<IEnumerable<ServiceDto>>(services);
        }

        public ServiceDto GetService(Guid recordId)
        {
            var service = _context.Services.FirstOrDefault(s => s.Id == recordId);
            return _mapper.Map<ServiceDto>(service);
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

        public CreateServiceDto Update(Guid recordId, CreateServiceDto userDto)
        {
            var entity = _context.Services.FirstOrDefault(s => s.Id == recordId);

            ArgumentNullException.ThrowIfNull(entity);

            entity.ServiceTypeId = userDto.ServiceTypeId;
            entity.Cost = userDto.Cost;
            entity.DurationTime = userDto.DurationTime;
            entity.Name = userDto.Name;

            _context.SaveChanges();

            return _mapper.Map<CreateServiceDto>(entity);
        }

        public CreateServiceTypeDto UpdateType(Guid recordId, CreateServiceTypeDto serviceTypeDto)
        {
            var entity = _context.ServiceTypes.FirstOrDefault(st => st.Id == recordId);

            ArgumentNullException.ThrowIfNull(entity);

            entity.Name = serviceTypeDto.Name;

            _context.SaveChanges();

            return _mapper.Map<CreateServiceTypeDto>(entity);
        }

        public ServiceTypeDto GetServiceType(Guid recordId)
        {
            var serviceType = _context.ServiceTypes.FirstOrDefault(st => st.Id == recordId);
            return _mapper.Map<ServiceTypeDto>(serviceType);
        }
    }

}
