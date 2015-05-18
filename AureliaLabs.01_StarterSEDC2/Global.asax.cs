using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using AureliaLabs._01_StarterSEDC2.Models;

namespace AureliaLabs._01_StarterSEDC2
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            Db.Products = new List<Product>();
            Db.Products.Add(new Product() { Id = 1, Name = "Hulk", Price = 110 });
            Db.Products.Add(new Product() { Id = 2, Name = "Black Widow", Price = 180 });
            Db.Products.Add(new Product() { Id = 3, Name = "Iron Man", Price = 200 });
            Db.Products.Add(new Product() { Id = 4, Name = "Captain America", Price = 70});
            Db.Products.Add(new Product() { Id = 5, Name = "Hawkeye", Price = 65 });

            Db.Cart = new Cart();
        }
    }
}