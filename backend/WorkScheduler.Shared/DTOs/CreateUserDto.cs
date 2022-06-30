using System.Text.Json.Serialization;

namespace WorkScheduler.Shared.DTOs
{
    public class CreateUserDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("phone")]
        public string Phone { get; set; }
    }
}
