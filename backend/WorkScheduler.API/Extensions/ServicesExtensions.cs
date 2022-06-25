namespace WorkScheduler.API.Extensions
{
    public static class ServicesExtensions
    {
        public static IServiceCollection AddSwagger(this IServiceCollection services)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            return services;
        }

        public static IServiceCollection AddAngularCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(options =>
                    options.WithOrigins("http://localhost:4200")
                           .AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                );
            });

            return services;
        }
    }
}
