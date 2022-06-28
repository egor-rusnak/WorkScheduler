namespace WorkScheduler.API.Models
{
    using WorkScheduler.API.Models.Abstract;

    public class User : Entity
    {
        public string Name { get; set; }
        public IEnumerable<Phone> Phones { get; set; }
    }
}
