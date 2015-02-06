/// <reference path="../typings/aurelia/aurelia.d.ts" />
import AureliaRouter = require("aurelia-router");

export class App {

    //array of types to be injected in the constructor
    static inject = [AureliaRouter.Router];

    //the router MUST be named router, because it is a router
    constructor(public router: AureliaRouter.Router) {
        this.router.configure(config => {
            config.title = "Aurelia";
            config.map([
                { route: ["", "welcome"], nav: true, moduleId: "welcome", title: "Welcome" },
                { route: "flickr", nav: true, moduleId: "flickr", title: "Flickr view" }
            ]);

        });
    }
}