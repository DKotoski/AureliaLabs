/// <reference path="../typings/aurelia/aurelia.d.ts" />
import AureliaRouter = require("aurelia-router");

export class App {

    static inject = [AureliaRouter.Router];

    constructor(private router: AureliaRouter.Router) {
        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                {
                    route: ['', 'welcome'],
                    moduleId: 'welcome',
                    nav: true,
                    title: 'Welcome'
                }
            ]);
        });
    } 
}