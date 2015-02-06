import AureliaRouter = require("aurelia-router");

export class App {

    private router: AureliaRouter.Router;

    static inject() { return [AureliaRouter]; }

    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome' }
            ]);
        });
    }
}  