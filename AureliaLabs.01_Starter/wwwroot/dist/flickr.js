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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci50cyJdLCJuYW1lcyI6WyJGbGlja3IiLCJGbGlja3IuY29uc3RydWN0b3IiLCJGbGlja3IuY2FuQWN0aXZhdGUiLCJGbGlja3IuYWN0aXZhdGUiLCJGbGlja3IuY2FuRGVhY3RpdmF0ZSIsIkZsaWNrci5kZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoia0ZBQ08sYUFBYTtJQUVwQixJQUFJLEdBQUcsR0FBRyw2RkFBNkYsQ0FBQztJQUV4RyxJQUFhLE1BQU07UUFPZkEsU0FQU0EsTUFBTUEsQ0FPS0EsVUFBcUNBO1lBQXJDQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUEyQkE7WUFDckRBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFFTUQsNEJBQVdBLEdBQWxCQTtRQUNBRSxDQUFDQTtRQUVERixvSEFBb0hBO1FBQzdHQSx5QkFBUUEsR0FBZkE7WUFBQUcsaUJBTUNBO1lBTEdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQzVCQSxJQUFJQSxDQUFDQSxVQUFDQSxRQUFRQTtnQkFDWEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUN6Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDWEEsQ0FBQ0E7UUFFREgsMEtBQTBLQTtRQUNuS0EsOEJBQWFBLEdBQXBCQTtZQUNJSSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxpQ0FBaUNBLENBQUNBLENBQUNBO1FBQ3REQSxDQUFDQTtRQUVNSiwyQkFBVUEsR0FBakJBO1FBQ0FLLENBQUNBO1FBNUJNTCxhQUFNQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQTZCL0NBLGFBQUNBO0lBQURBLENBL0JBLEFBK0JDQSxJQUFBO0lBL0JZLGNBQU0sR0FBTixNQStCWixDQUFBIiwiZmlsZSI6ImZsaWNrci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9