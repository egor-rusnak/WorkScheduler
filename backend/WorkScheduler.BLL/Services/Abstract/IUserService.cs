using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IUserService
    {
        CreateUserDto Create(CreateUserDto userDto);
        IEnumerable<CreateUserDto> GetAllUsers();
    }
}
