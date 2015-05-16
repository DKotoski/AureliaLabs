import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject
export class ChildRouter {
    public heading = 'Child Router';

    constructor(public router: Router) {
        this.router.configure((config) => {
            config.map([
                { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
                { route: "flickr", moduleId: "./flickr", nav: true, title: "Flickr" },
                { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }
            ]);
        });
    }
} 