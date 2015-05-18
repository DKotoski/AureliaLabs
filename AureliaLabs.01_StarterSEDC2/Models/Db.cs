using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AureliaLabs._01_StarterSEDC2.Models
{
    //Mock object stuff

    public static class Db
    {
        public static List<Product> Products { get; set; }
        public static Cart Cart { get; set; }

    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    public class Cart
    {
        public List<Item> Items { get; private set; }

        public Cart()
        {
            Items = new List<Item>();
        }

        public Item AddProduct(Product product)
        {
            var item = new Item()
            {
                ProductId = product.Id,
                Name = product.Name,
                Price = product.Price,
                TimeAdded = DateTime.Now
            };

            Items.Add(item);

            return item;
        }

        public class Item
        {
            public int ProductId { get; set; }
            public string Name { get; set; }
            public decimal Price { get; set; }
            public DateTime TimeAdded { get; set; }
        }
    }
}