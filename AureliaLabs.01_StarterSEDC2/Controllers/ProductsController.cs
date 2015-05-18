using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AureliaLabs._01_StarterSEDC2.Models;

namespace AureliaLabs._01_StarterSEDC2.Controllers
{
    public class ProductsController : ApiController
    {
        public IEnumerable<Product> GetAllProducts()
        {
            return Db.Products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = Db.Products.FirstOrDefault(x => x.Id == id);
            if (product == null)
                return NotFound();
            return Ok(product);
        }
    }
}
