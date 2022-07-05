using System.Text.Json.Serialization;

namespace WorkScheduler.Shared.DTOs.Service
{
    public class CreateServiceTypeDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
