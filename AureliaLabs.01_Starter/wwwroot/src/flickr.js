define(["require", "exports", "aurelia-http-client"], function (require, exports, AurHttpClient) {
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
    var Flickr = (function () {
        function Flickr(httpClient) {
            this.httpClient = httpClient;
            this.heading = "Flickr";
            this.images = [];
        }
        Flickr.prototype.canActivate = function () {
        };
        //when your route is ready to activate, the router will call the activate hook (part of Screen Activation Lifecycle)
        Flickr.prototype.activate = function () {
            var _this = this;
            return this.httpClient.jsonp(url).then(function (response) {
                console.log(response);
                _this.images = response.content.items;
            });
        };
        //the router calls this before navigation away from the route happens. It gives you the opportunity to allow or disallow the navigation to continue by returning a boolean
        Flickr.prototype.canDeactivate = function () {
            return confirm("Are you sure you want to leave?");
        };
        Flickr.prototype.deactivate = function () {
        };
        Flickr.inject = [AurHttpClient.HttpClient];
        return Flickr;
    })();
    exports.Flickr = Flickr;
});
