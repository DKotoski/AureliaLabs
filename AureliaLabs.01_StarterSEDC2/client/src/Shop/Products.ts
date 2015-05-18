export class Products {
    products: Product[] = [];
    cart: Cart = new Cart();

    constructor() {
        this.products.push(new Product("Hulk", 110));
        this.products.push(new Product("Captain America", 130));
        this.products.push(new Product("Black Widow", 150));
    }

    addToCart(product: Product) {
        this.cart.add(product.name, product.price);
    }
}

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    cartItems: CartItem[] = [];

    add(name: string, price: number) {
        this.cartItems.push(new CartItem(name, price));
    }

    confirmCart() {
        //TODO: navigate to final page with payload
    };
}

class CartItem {
    name: string;
    price: number;
    timeAdded: Date;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.timeAdded = new Date(Date.now());
    }
}