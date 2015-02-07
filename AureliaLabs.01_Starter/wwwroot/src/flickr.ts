/// <reference path="../typings/aurelia/aurelia.d.ts" />
import AurHttpClient = require("aurelia-http-client");

var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";

export class Flickr {

    static inject = [AurHttpClient.HttpClient];

    public heading: string;
    public images: Array<any>;

    constructor(private httpClient : AurHttpClient.HttpClient) {
        this.heading = "Flickr";
        this.images = [];
    }

    public canActivate() {
    }

    //when your route is ready to activate, the router will call the activate hook (part of Screen Activation Lifecycle)
    public activate() {
        return this.httpClient.jsonp(url)
            .then((response) => {
                console.log(response);
                this.images = response.content.items;
            });
    }

    //the router calls this before navigation away from the route happens. It gives you the opportunity to allow or disallow the navigation to continue by returning a boolean
    public canDeactivate() {    //can return: boolean or Promise
        return confirm("Are you sure you want to leave?");
    }

    public deactivate() {
    }
} 