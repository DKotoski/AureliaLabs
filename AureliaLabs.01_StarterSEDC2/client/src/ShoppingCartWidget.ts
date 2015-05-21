import {autoinject} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class ShoppingCartWidget {
    cartItems: CartItem[] = [];
    calculatedPrice = 0;
    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe("ProductAddedToCart", (product) => {
            this.addProductToCartItems(product);
        });
    }

    private addProductToCartItems(product) {
        var foundCartItem = this.cartItems.find((x) => {
            return x.product.id == product.id;
        });

        if (foundCartItem) {
            foundCartItem.quantity++;
        } else {
            var item = new CartItem();
            item.product.id = product.id;
            item.product.name = product.name;
            item.product.price = product.price;
            item.quantity = 1;
            this.cartItems.push(item);
        }
        this.recalculateTotalPrice();
    }

    public removeCartItem(cartItem: CartItem): void {
        var foundCartItem = this.cartItems.find((x) => {
            return x === cartItem;
        });

        if (foundCartItem.quantity === 1) {
            var index = this.cartItems.indexOf(foundCartItem);
            this.cartItems.splice(index, 1);
        } else {
            foundCartItem.quantity--;
        }

        this.recalculateTotalPrice();
    }

    private recalculateTotalPrice() {
        this.calculatedPrice = 0;
        this.cartItems.forEach((item) => {
            this.calculatedPrice += item.product.price * item.quantity;
        });
    }

}

class CartItem {
    public product = new Product();
    public quantity = 0;
}

class Product {
    public id: number;
    public name: string;
    public price: number;
}