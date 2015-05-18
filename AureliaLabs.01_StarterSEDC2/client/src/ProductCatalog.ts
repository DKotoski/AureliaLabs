import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import * as $ from "jquery";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class ProductCatalog {
    products = [];

    constructor(private httpClient: HttpClient, private eventAggregator: EventAggregator) {

    }

    activate() {
        this.products = [];
        this.httpClient.get("http://localhost:20127/api/products").then((result) => {
            var response = JSON.parse(result.response);
            this.products = response;
        });

        return true;
    }

    addToCart(product) {
        var payload = {
            id: product.id,
            name: product.name,
            price: product.price
        };
        this.eventAggregator.publish("productBeforeAddedToCart", payload);
    }
} 