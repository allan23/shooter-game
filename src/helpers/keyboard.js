"use strict";
exports.__esModule = true;
var Keyboard = (function () {
    function Keyboard() {
        var _this = this;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.shoot = false;
        document.addEventListener('keydown', function (event) {
            _this.keyDownHandler(event);
        }, false);
        document.addEventListener('keyup', function (event) {
            _this.keyUpHandler(event);
        }, false);
    }
    Keyboard.prototype.keyDownHandler = function (event) {
        switch (event.keyCode) {
            case 39:
                this.right = true;
                break;
            case 37:
                this.left = true;
                break;
            case 40:
                this.down = true;
                break;
            case 38:
                this.up = true;
                break;
            case 32:
                this.shoot = true;
                break;
        }
    };
    Keyboard.prototype.keyUpHandler = function (event) {
        switch (event.keyCode) {
            case 39:
                this.right = false;
                break;
            case 37:
                this.left = false;
                break;
            case 40:
                this.down = false;
                break;
            case 38:
                this.up = false;
                break;
            case 32:
                this.shoot = false;
                break;
        }
    };
    return Keyboard;
}());
exports["default"] = Keyboard;
//# sourceMappingURL=keyboard.js.map