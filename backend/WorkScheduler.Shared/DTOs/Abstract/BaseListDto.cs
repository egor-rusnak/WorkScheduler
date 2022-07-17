using System.Text.Json.Serialization;

namespace WorkScheduler.Shared.DTOs.Abstract
{
    public class BaseListDto
    {
        [JsonPropertyName("id")]
        public Guid Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
}
