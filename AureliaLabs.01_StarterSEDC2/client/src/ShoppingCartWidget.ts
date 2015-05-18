import {autoinject} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class ShoppingCartWidget {
    cartItems = [];

    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe("productBeforeAddedToCart", (payload) => {
            this.cartItems.push({
                id: payload.id,
                name: payload.name,
                price: payload.price
            });
        });
    }
} 