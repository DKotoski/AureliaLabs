import {Item} from "ProductCatalog/Item";

export class Main {
    items: Item[] = [];
    title: string = "Product catalog";

    constructor() {
        this.items.push(new Item("Pece Deteto"));
        this.items.push(new Item("Kjoshot"));
        this.items.push(new Item("Peckata"));
        this.items.push(new Item("Nekojasi"));
    }
}
