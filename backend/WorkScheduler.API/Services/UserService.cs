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
            throw new Exception();
        }
    }
}
