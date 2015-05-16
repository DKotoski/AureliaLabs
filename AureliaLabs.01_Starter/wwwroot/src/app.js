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
