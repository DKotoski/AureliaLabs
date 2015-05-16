import aureliaRouter = require("aurelia-router");
import framework = require("aurelia-framework");

export class ChildRouter {
    heading = 'Child Router';

    constructor(public router: aureliaRouter.Router) {
        this.router.configure((config) => {
            config.title = "Aurelia";
            config.map([
                { route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' },
                { route: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' },
                { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
            ]);
        });
    }
}
