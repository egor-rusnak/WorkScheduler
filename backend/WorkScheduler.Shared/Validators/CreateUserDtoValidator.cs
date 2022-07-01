using FluentValidation;
using WorkScheduler.Shared.DTOs;

namespace WorkScheduler.Shared.Validators
{
    public class CreateUserDtoValidator : AbstractValidator<CreateUserDto>
    {
        public CreateUserDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .MinimumLength(2)
                .MaximumLength(20);

            RuleFor(x => x.Phone)
                .NotEmpty();
        }
    }
}
