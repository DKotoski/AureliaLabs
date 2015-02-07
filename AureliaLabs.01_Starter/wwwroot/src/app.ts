/// <reference path="../typings/aurelia/aurelia.d.ts" />
import AurRouter = require("aurelia-router");

export class App {

    //array of types to be injected in the constructor
    static inject = [AurRouter.Router];

    //the router MUST be named router, because it is a router
    constructor(public router: AurRouter.Router) {
        this.router.configure(config => {
            config.title = "Aurelia";
            config.map([
                { route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" },
                { route: "flickr", moduleId: "flickr", nav: true, title: "Flickr view" }
            ]);
        });
    }
}