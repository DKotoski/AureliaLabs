define(["require", "exports", "aurelia-framework"], function (require, exports, AurFramework) {
    var Behaviour = AurFramework.Behavior;
    var NavBar = (function () {
        function NavBar() {
        }
        //metadata is a way to provide information about your class to the Aurelia framework
        //The withProperty method adds a BehaviorProperty which tells the framework that we want our
        //class's router property to be surfaced as an attribute in the HTML. 
        //Once it's surfaced as an attribute, we can databind to it in the view.
        NavBar.metadata = Behaviour.withProperty("router");
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
