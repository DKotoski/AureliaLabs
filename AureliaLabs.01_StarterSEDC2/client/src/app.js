define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        //constructor() {
        App.prototype.configureRouter = function (config, router) {
            config.title = "Aurelia";
            config.map([
                { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
                { route: "flickr", moduleId: "./flickr", nav: true, title: "Flickr" },
                { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});
