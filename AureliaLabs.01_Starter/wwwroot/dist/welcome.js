define(["require", "exports"], function (require, exports) {
    var Welcome = (function () {
        function Welcome() {
            this.heading = "Welcome to the Aurelia Navigation App (VS/TS)!";
            this.firstName = "John";
            this.lastName = "Doe";
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOlsiV2VsY29tZSIsIldlbGNvbWUuY29uc3RydWN0b3IiLCJXZWxjb21lLmZ1bGxOYW1lIiwiV2VsY29tZS53ZWxjb21lIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBYSxPQUFPO1FBS2hCQSxTQUxTQSxPQUFPQTtZQU1aQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnREFBZ0RBLENBQUNBO1lBQ2hFQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxNQUFNQSxDQUFDQTtZQUN4QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDMUJBLENBQUNBO1FBRURELHNCQUFJQSw2QkFBUUE7aUJBQVpBO2dCQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNoREEsQ0FBQ0E7OztXQUFBRjtRQUVEQSx5QkFBT0EsR0FBUEE7WUFDSUcsS0FBS0EsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO1FBQ0xILGNBQUNBO0lBQURBLENBbEJBLEFBa0JDQSxJQUFBO0lBbEJZLGVBQU8sR0FBUCxPQWtCWixDQUFBIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==