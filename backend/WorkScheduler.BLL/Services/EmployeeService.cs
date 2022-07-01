using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.DAL.Context;
using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.BLL.Services
{
    public class EmployeeService : BaseService, IEmployeeService
    {
        public EmployeeService(WorkSchedulerContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public EmployeeDto Create(EmployeeDto employeeDto)
        {
            var employee = _mapper.Map<Employee>(employeeDto);

            _context.Add(employee);
            _context.SaveChanges();

            return _mapper.Map<EmployeeDto>(employee);
        }

        public IEnumerable<EmployeeDto> GetAll()
        {
            return _mapper.Map<IEnumerable<EmployeeDto>>(_context.Employes.Include(e => e.Phones));
        }
    }
}
