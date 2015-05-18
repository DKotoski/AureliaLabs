import {Router} from "aurelia-router"

export class App {
    router: Router;

    configureRouter(config, router) {
        this.router = router;
        config.map([
            { route: ["", "welcome"], moduleId: "./home", nav: true, title: "Home" },
            { route: "product-catalog", moduleId: "./ProductCatalog", nav: true, title: "ProductCatalog" },
            { route: "shopping-cart-confirmation", moduleId: "./ShoppingCartConfirmation", nav: false, title: "Shopping Cart Confirmation" },
        ]);
    }
} 