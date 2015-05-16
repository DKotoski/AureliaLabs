define(["require", "exports"], function (require, exports) {
    var ChildRouter = (function () {
        function ChildRouter(router) {
            this.router = router;
            this.heading = 'Child Router';
            this.router.configure(function (config) {
                config.title = "Aurelia";
                config.map([
                    { route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' },
                    { route: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' },
                    { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
                ]);
            });
        }
        return ChildRouter;
    })();
    exports.ChildRouter = ChildRouter;
});
