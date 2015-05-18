import {Aurelia} from "aurelia-framework";

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    //You may be concerned about the tediousness of having to import things into each view.Remember, during the bootstrapping phase you can configure Aurelia 
    //with global resources to be available in every view. Just use aurelia.globalizeResources(...resourcePaths).

    aurelia.start().then(x => x.setRoot("app"));
}