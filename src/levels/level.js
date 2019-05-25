"use strict";
exports.__esModule = true;
var handler_1 = require("../helpers/handler");
var Level = (function () {
    function Level() {
        this.handler = new handler_1["default"]();
    }
    Level.prototype.update = function (deltaTime, screen) {
        this.handler.update(deltaTime, screen);
    };
    return Level;
}());
exports["default"] = Level;
//# sourceMappingURL=level.js.map