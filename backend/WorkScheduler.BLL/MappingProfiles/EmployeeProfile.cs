using AutoMapper;
using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.MappingProfiles
{
    public class EmployeeProfile : Profile
    {
        public EmployeeProfile()
        {
            CreateMap<EmployeeDto, Employee>();
            CreateMap<Employee, EmployeeDto>();
        }
    }
}
