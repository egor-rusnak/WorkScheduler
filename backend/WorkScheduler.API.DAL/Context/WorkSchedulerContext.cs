﻿using Microsoft.EntityFrameworkCore;

namespace WorkScheduler.DAL.Context
{
    public class WorkSchedulerContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Phone> Phones { get; set; }

        public WorkSchedulerContext(DbContextOptions options) : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }
    }
}