import {autoinject} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class ShoppingCartWidget {
    cartItems = [];

    constructor(private eventAggregator: EventAggregator) {
    }
} 