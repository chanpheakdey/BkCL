
using BECamLot.Controller;
using SignalR.Classes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddRazorPages();
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("https://becl.azurewebsites.net", "https://localhost:7111/", "https://localhost:7282/");
                          //builder.AllowAnyOrigin();
                          builder.AllowAnyMethod();
                          builder.AllowAnyHeader();
                      });
});
builder.Services.AddMvc().AddRazorPagesOptions(options =>
{
    options.Conventions.AddPageRoute("/becl", "");


});

var app = builder.Build();





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

app.MapGet("api/getReport/{username}", async (http) =>
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

app.MapGet("api/getReport2/{username}", async (http) =>
{
    object? username;
    if (!http.Request.RouteValues.TryGetValue("username", out username))
    {
        http.Response.StatusCode = 400;
        return;
    }


    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getReport2(username.ToString());
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});

app.MapGet("api/getReport3/{username}", async (http) =>
{
    object? username;
    if (!http.Request.RouteValues.TryGetValue("username", out username))
    {
        http.Response.StatusCode = 400;
        return;
    }


    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getReport3(username.ToString());
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});

app.MapGet("api/getReport4/{username}", async (http) =>
{
    object? username;
    if (!http.Request.RouteValues.TryGetValue("username", out username))
    {
        http.Response.StatusCode = 400;
        return;
    }


    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getReport4(username.ToString());
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});


app.MapGet("api/getmember/{master}", async (http) =>
{
    object? master;
    if (!http.Request.RouteValues.TryGetValue("master", out master))
    {
        http.Response.StatusCode = 400;
        return;
    }


    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getMember(master.ToString());
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});


app.MapGet("api/getmaster", async (http) =>
{
   

    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getMaster();
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});

app.MapGet("api/getJakepot", async (http) =>
{


    DalGlobal dalGlobal = new DalGlobal();


    var todoItem = await dalGlobal.getJakepot();
    if (todoItem == null)
    {
        http.Response.StatusCode = 404;
        return;
    }

    await http.Response.WriteAsJsonAsync(todoItem);
});
app.Run();
