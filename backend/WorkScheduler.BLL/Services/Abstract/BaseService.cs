using AutoMapper;
using WorkScheduler.DAL.Context;

namespace WorkScheduler.BLL.Services.Abstract
{
    public class BaseService
    {
        private protected readonly WorkSchedulerContext _context;
        private protected readonly IMapper _mapper;

        public BaseService(WorkSchedulerContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
    }
}
