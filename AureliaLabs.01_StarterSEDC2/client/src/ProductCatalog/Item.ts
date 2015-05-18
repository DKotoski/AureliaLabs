module ProductCatalog {
    export class Item {
        $parent: any;
        public name: string = "item";

        bind(bindingContext) {
            this.$parent = bindingContext;
        }

        //constructor(name?: string) {
        //    if (name)
        //        this.name = name;
        //}
    }
}