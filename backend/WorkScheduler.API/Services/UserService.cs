namespace WorkScheduler.API.Services
{
    using WorkScheduler.API.DTOs;
    using WorkScheduler.API.Models;

    public class UserService
    {
        public UserService(WorkSchedulerContext context)
        {
            Context = context;
        }

        protected WorkSchedulerContext Context { get; }

        public UserDto Create(UserDto userDto)
        {
            var user = new User() { Name = userDto.Name, CreatedBy = null };
            var phone = new Phone() { Number = userDto.Phone, User = user, CreatedBy = null };
            user.Phones.Add(phone);
            Context.Users.Add(user);
            Context.SaveChanges();
            return userDto;
        }
    }
}
