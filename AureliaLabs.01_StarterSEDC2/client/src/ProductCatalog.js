if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var ProductCatalog = (function () {
        function ProductCatalog(httpClient) {
            this.httpClient = httpClient;
            this.products = [];
        }
        ProductCatalog.prototype.activate = function () {
            var _this = this;
            this.products = [];
            this.httpClient.get("http://localhost:20127/api/products").then(function (result) {
                for (var i = 0; i < JSON.parse(result.response); i++) {
                    console.log(result.response[i]);
                    _this.products.push(result.response[i]);
                }
            });
            return true;
        };
        ProductCatalog = __decorate([
            aurelia_framework_1.autoinject
        ], ProductCatalog);
        return ProductCatalog;
    })();
    exports.ProductCatalog = ProductCatalog;
});
