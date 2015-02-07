/// <reference path="../typings/aurelia/aurelia.d.ts" />
import AurFramework = require("aurelia-framework");
var Behaviour = AurFramework.Behavior;

export class NavBar {

    //metadata is a way to provide information about your class to the Aurelia framework
    //The withProperty method adds a BehaviorProperty which tells the framework that we want our
    //class's router property to be surfaced as an attribute in the HTML. 
    //Once it's surfaced as an attribute, we can databind to it in the view.
    public static metadata = Behaviour.withProperty("router");


} 