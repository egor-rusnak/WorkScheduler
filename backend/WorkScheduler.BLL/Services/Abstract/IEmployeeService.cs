using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.Services.Abstract
{
    public interface IEmployeeService
    {
        EmployeeDto Create(EmployeeDto employeeDto);
        IEnumerable<EmployeeDto> GetAll();
    }
}
