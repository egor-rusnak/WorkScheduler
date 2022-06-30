namespace WorkScheduler.API.DTOs
{
    using System.Text.Json.Serialization;

    public class UserDto
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("phone")]
        public string Phone { get; set; }
    }
}
