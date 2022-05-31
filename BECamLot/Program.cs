
using BECamLot.Controller;
using SignalR.Classes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddRazorPages();
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var app = builder.Build();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("https://becl.azurewebsites.net", "https://localhost:7111/");
                          //builder.AllowAnyOrigin();
                          builder.AllowAnyMethod();
                          builder.AllowAnyHeader();
                      });
});



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();


app.MapPost("api/logout", (ClToken clToken) =>
{
    DalGlobal dalGlobal = new DalGlobal();
    //return dalGlobal.UserLogout(clToken);
    return clToken;

});

app.MapGet("api/getStandard/{username}", async (http) =>
{
    object? username;
    if (!http.Request.RouteValues.TryGetValue("username", out username))
    {
        http.Response.StatusCode = 400;
        return;
    }


    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getReport(username.ToString());
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});




app.Run();
