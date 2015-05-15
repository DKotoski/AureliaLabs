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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIudHMiXSwibmFtZXMiOlsiTmF2QmFyIiwiTmF2QmFyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiZ0ZBQ08sWUFBWTtJQUNuQixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBRXRDLElBQWEsTUFBTTtRQUFuQkEsU0FBYUEsTUFBTUE7UUFTbkJDLENBQUNBO1FBUEdELG9GQUFvRkE7UUFDcEZBLDRGQUE0RkE7UUFDNUZBLHNFQUFzRUE7UUFDdEVBLHdFQUF3RUE7UUFDMURBLGVBQVFBLEdBQUdBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBRzlEQSxhQUFDQTtJQUFEQSxDQVRBLEFBU0NBLElBQUE7SUFUWSxjQUFNLEdBQU4sTUFTWixDQUFBIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==