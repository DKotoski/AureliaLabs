var ProductCatalog;
(function (ProductCatalog) {
    var Item = (function () {
        function Item() {
        }
        Item.prototype.bind = function (bindingContext) {
            this.$parent = bindingContext;
        };
        return Item;
    })();
    ProductCatalog.Item = Item;
})(ProductCatalog || (ProductCatalog = {}));
