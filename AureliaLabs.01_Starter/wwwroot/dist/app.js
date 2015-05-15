define(["require", "exports", "aurelia-router"], function (require, exports, AurRouter) {
    var App = (function () {
        //the router MUST be named router, because it is a router
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "Aurelia";
                config.map([
                    { route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" },
                    { route: "flickr", moduleId: "flickr", nav: true, title: "Flickr view" }
                ]);
            });
        }
        //array of types to be injected in the constructor
        App.inject = [AurRouter.Router];
        return App;
    })();
    exports.App = App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI2RUFDTyxTQUFTO0lBRWhCLElBQWEsR0FBRztRQUtaQSx5REFBeURBO1FBQ3pEQSxTQU5TQSxHQUFHQSxDQU1PQSxNQUF3QkE7WUFBeEJDLFdBQU1BLEdBQU5BLE1BQU1BLENBQWtCQTtZQUN2Q0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsTUFBTUE7Z0JBQ3hCQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQTtnQkFDekJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO29CQUNQQSxFQUFFQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxTQUFTQSxDQUFDQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxTQUFTQSxFQUFFQTtvQkFDNUVBLEVBQUVBLEtBQUtBLEVBQUVBLFFBQVFBLEVBQUVBLFFBQVFBLEVBQUVBLFFBQVFBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLGFBQWFBLEVBQUVBO2lCQUMzRUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFaREQsa0RBQWtEQTtRQUMzQ0EsVUFBTUEsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFZdkNBLFVBQUNBO0lBQURBLENBZkEsQUFlQ0EsSUFBQTtJQWZZLFdBQUcsR0FBSCxHQWVaLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=