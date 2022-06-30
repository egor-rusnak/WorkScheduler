using AutoMapper;
using WorkScheduler.DAL;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.MappingProfiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            // Don't use mapper if business logic in mapping. Partial mapping also not allowed! 
            // just mapping options, ignoring attributes for example, or map attributes with different names
            // will be discused //
            //CreateMap<User, UserDto>();




            //BAD PRACTICE :)
            CreateMap<CreateUserDto, User>().ForMember(u => u.Phones, opt =>
                opt.MapFrom(ud => new List<Phone>() { new Phone { Number = ud.Phone } })
            );
            CreateMap<User, CreateUserDto>().ForMember(ud => ud.Phone, opt => opt.MapFrom(u => u.Phones.FirstOrDefault()));
        }
    }
}
