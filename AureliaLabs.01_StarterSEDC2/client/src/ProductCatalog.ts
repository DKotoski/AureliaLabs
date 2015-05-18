import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import * as $ from "jquery";

@autoinject
export class ProductCatalog {
    products = [];

    constructor(private httpClient: HttpClient) {
        
    }

    activate() {
        this.products = [];
        this.httpClient.get("http://localhost:20127/api/products").then((result) => {
            var response = JSON.parse(result.response);
            this.products = response;
        });

        return true;
    }
} 