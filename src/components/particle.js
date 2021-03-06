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
var Particle = (function (_super) {
    __extends(Particle, _super);
    function Particle(width, height, x, y) {
        var _this = _super.call(this, width, height, x, y) || this;
        _this.type = 'particle';
        _this.baseColor = '#f0f';
        _this.altColor = '#fff';
        _this.border = '#000';
        _this.xMove = 35;
        _this.yMove = 35;
        return _this;
    }
    Particle.prototype.move = function (deltaTime) {
        this.position.x += this.xMove / deltaTime;
        this.position.y += this.yMove / deltaTime;
        if (this.collisionDetected) {
            this.killMe = true;
        }
        this.color = (this.color === this.baseColor) ? this.altColor : this.baseColor;
    };
    Particle.prototype.update = function (deltaTime, handler) {
        if (!deltaTime)
            return;
        this.move(deltaTime);
        this.borderCollision();
        if (!this.immortal) {
            this.lifeTime--;
            if (this.lifeTime <= 0) {
                this.killMe = true;
            }
        }
    };
    Particle.prototype.collision = function (component) {
        if (component.type === 'enemy') {
            this.killMe = true;
        }
    };
    return Particle;
}(component_1["default"]));
exports["default"] = Particle;
//# sourceMappingURL=particle.js.map