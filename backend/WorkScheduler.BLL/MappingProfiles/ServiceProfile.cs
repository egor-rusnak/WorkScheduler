using AutoMapper;
using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs.Service;

namespace WorkScheduler.BLL.MappingProfiles
{
    public class ServiceProfile : Profile
    {
        public ServiceProfile()
        {
            CreateMap<Service, CreateServiceDto>();
            CreateMap<CreateServiceDto, Service>();
            CreateMap<Service, ServiceDto>();
            CreateMap<ServiceDto, Service>();

            CreateMap<ServiceType, CreateServiceTypeDto>();
            CreateMap<CreateServiceTypeDto, ServiceType>();
            CreateMap<ServiceType, ServiceTypeDto>();
            CreateMap<ServiceTypeDto, ServiceType>();
        }
    }
}

