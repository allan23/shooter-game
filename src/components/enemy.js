"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var component_1 = require("./component");
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(width, height, x, y) {
        var _this = _super.call(this, width, height, x, y) || this;
        _this.type = 'enemy';
        _this.color = '#cfc';
        _this.hasBorder = true;
        return _this;
    }
    Enemy.prototype.move = function (deltaTime) {
    };
    return Enemy;
}(component_1["default"]));
exports["default"] = Enemy;
//# sourceMappingURL=enemy.js.map