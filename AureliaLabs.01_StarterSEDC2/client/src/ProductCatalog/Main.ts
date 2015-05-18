module ProductCatalog {
    export class Main {
        items: Item[] = [];

        constructor() {
            this.items.push(new Item("Pece Deteto"));
            this.items.push(new Item("Kjoshot"));
            this.items.push(new Item("Peckata"));
            this.items.push(new Item("Nekojasi"));
        }
    }
}