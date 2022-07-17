using WorkScheduler.DAL.Entities;
using WorkScheduler.Shared.DTOs.Abstract;

namespace WorkScheduler.Shared.DTOs.Service
{
    public class ServiceDto : BaseListDto
    {
        public decimal Cost { get; set; }
        //in minutes
        public int DurationTime { get; set; }
        public Guid ServiceTypeId { get; set; }
    }
}
