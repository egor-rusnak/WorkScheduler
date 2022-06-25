using WorkScheduler.API.Extensions;
using WorkScheduler.API.Middlewares;

var builder = WebApplication.CreateBuilder(args);
var providerServices = builder.Services;

// Add services to the container.

providerServices.AddControllers();
providerServices.AddSwagger();



var app = builder.Build();


// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<GenericExceptionHandlerMiddleware>();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
