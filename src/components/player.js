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
var keyboard_1 = require("../helpers/keyboard");
var particle_1 = require("./particle");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(width, height, x, y) {
        var _this = _super.call(this, width, height, x, y) || this;
        _this.type = 'player';
        _this.shootDelay = 20;
        _this.currentDelay = 0;
        _this.keyboard = new keyboard_1["default"]();
        return _this;
    }
    Player.prototype.move = function (deltaTime) {
        if (this.keyboard.left) {
            this.position.x -= this.xMove / deltaTime;
        }
        if (this.keyboard.right) {
            this.position.x += this.xMove / deltaTime;
        }
        if (this.keyboard.up) {
            this.position.y -= this.yMove / deltaTime;
        }
        if (this.keyboard.down) {
            this.position.y += this.yMove / deltaTime;
        }
    };
    Player.prototype.update = function (deltaTime) {
        if (!deltaTime)
            return;
        this.maybeShoot(deltaTime);
        this.move(deltaTime);
        this.borderCollision();
    };
    Player.prototype.maybeShoot = function (deltaTime) {
        if (this.keyboard.shoot && this.currentDelay === 0) {
            this.adds.push(new particle_1["default"](3, 3, this.position.x + this.width, this.position.y + this.height));
            this.currentDelay = this.shootDelay;
        }
        if (this.currentDelay !== 0) {
            this.currentDelay--;
        }
    };
    return Player;
}(component_1["default"]));
exports["default"] = Player;
//# sourceMappingURL=player.js.map