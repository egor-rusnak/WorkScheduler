using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.DAL.Context;
using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.Services
{
    public class UserService : BaseService, IUserService
    {
        public UserService(WorkSchedulerContext context, IMapper mapper) : base(context, mapper)
        { }

        public CreateUserDto Create(CreateUserDto userDto)
        {
            var user = _mapper.Map<User>(userDto);

            _context.Users.Add(user);
            _context.SaveChanges();

            return _mapper.Map<CreateUserDto>(user);
        }

        public IEnumerable<CreateUserDto> GetAllUsers()
        {
            return _mapper.Map<IEnumerable<CreateUserDto>>(_context.Users.Include(u => u.Phones));
        }

        public void MarkUserAsEmployer(Guid userId)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == userId)
                ?? throw new KeyNotFoundException("User not found");

            user.UserType = UserType.Employee;

            _context.SaveChanges();
        }
    }
}
