using Microsoft.EntityFrameworkCore;
using WorkScheduler.API.Extensions;
using WorkScheduler.API.Middlewares;
using WorkScheduler.API.Models;
using WorkScheduler.API.Services;

var builder = WebApplication.CreateBuilder(args);
var providerServices = builder.Services;

// Add services to the container.

providerServices.AddControllers();
providerServices.AddSwagger();
providerServices.AddAngularCors();
providerServices.AddDbContext<WorkSchedulerContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);
providerServices.AddTransient<UserService>();

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
