using System.Reflection;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using WorkScheduler.API.Extensions;
using WorkScheduler.API.Middlewares;
using WorkScheduler.BLL.MappingProfiles;
using WorkScheduler.BLL.Services;
using WorkScheduler.BLL.Services.Abstract;
using WorkScheduler.DAL.Context;
using WorkScheduler.Shared.Validators;

var builder = WebApplication.CreateBuilder(args);
var providerServices = builder.Services;

// Add services to the container.

providerServices.AddLogging();
providerServices
    .AddControllers()
    .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<CreateUserDtoValidator>());
providerServices.AddSwagger();
providerServices.AddAngularCors();
providerServices.AddAutoMapper(Assembly.GetAssembly(typeof(UserProfile)));
providerServices.AddDbContext<WorkSchedulerContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

providerServices.AddTransient<IUserService, UserService>();



var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseMiddleware<GenericExceptionHandlerMiddleware>();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();


app.Run();
