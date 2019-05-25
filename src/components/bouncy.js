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
var enemy_1 = require("./enemy");
var Bouncy = (function (_super) {
    __extends(Bouncy, _super);
    function Bouncy(width, height, x, y) {
        var _this = _super.call(this, width, height, x, y) || this;
        _this.type = 'enemy';
        _this.color = '#cfc';
        _this.hasBorder = true;
        _this.goingDown = true;
        _this.goingLeft = true;
        _this.xMove = 5;
        _this.yMove = 5;
        _this.maxSpeed = 260;
        return _this;
    }
    Bouncy.prototype.move = function (deltaTime) {
        if (this.position.y < 10) {
            this.goingDown = true;
        }
        else if (this.position.y > 360) {
            this.goingDown = false;
        }
        if (this.goingDown) {
            this.position.y += this.yMove / deltaTime;
            this.speedUp(deltaTime);
        }
        else {
            this.position.y -= this.yMove / deltaTime;
        }
        if (this.position.x < 50) {
            this.goingLeft = false;
            this.position.x += 20;
        }
        if (this.position.x > 620) {
            this.goingLeft = true;
            this.position.x -= 20;
        }
        if (this.goingLeft) {
            this.position.x -= 10 / deltaTime;
        }
        else {
            this.position.x += 10 / deltaTime;
        }
    };
    Bouncy.prototype.slowDown = function (deltaTime) {
        if (this.yMove < 0) {
            this.yMove = 0;
        }
        if (this.yMove === 0)
            return;
        this.yMove -= 2 / deltaTime;
    };
    Bouncy.prototype.speedUp = function (deltaTime) {
        if (this.yMove > this.maxSpeed) {
            this.yMove = this.maxSpeed;
        }
        if (this.yMove === this.maxSpeed)
            return;
        this.yMove += 20 / deltaTime;
    };
    Bouncy.prototype.chasePlayer = function (player) {
        this.goingLeft = (player.x < this.position.x);
    };
    Bouncy.prototype.update = function (deltaTime, handler) {
        if (!deltaTime)
            return;
        this.chasePlayer(handler.playerPos);
        this.move(deltaTime);
        this.borderCollision();
        if (!this.immortal) {
            this.lifeTime--;
            if (this.lifeTime <= 0) {
                this.killMe = true;
            }
        }
    };
    return Bouncy;
}(enemy_1["default"]));
exports["default"] = Bouncy;
//# sourceMappingURL=bouncy.js.map