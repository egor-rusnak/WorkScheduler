using System.Text.Json.Serialization;
using WorkScheduler.DAL.Entities;

namespace WorkScheduler.Shared.DTOs.Service
{
    public class CreateServiceDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("durationTime")]
        public int DurationTime { get; set; }

        [JsonPropertyName("serviceTypeId")]
        public Guid ServiceTypeId { get; set; }

        [JsonPropertyName("cost")]
        public decimal Cost { get; set; }
    }
}
