using System.Text.Json.Serialization;
using WorkScheduler.DAL.Entities;

namespace WorkScheduler.Shared.DTOs
{
    public class CreateServiceDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("durationTime")]
        public int DurationTime { get; set; }

        [JsonPropertyName("serviceType")]
        public ServiceType ServiceType { get; set; }
    }
}
