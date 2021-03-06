"use strict";
exports.__esModule = true;
var Component = (function () {
    function Component(width, height, x, y) {
        this.position = {
            x: 20,
            y: 20
        };
        this.xMove = 20;
        this.yMove = 20;
        this.killMe = false;
        this.collisionDetected = false;
        this.type = 'component';
        this.color = '#000';
        this.border = '#fff';
        this.hasBorder = true;
        this.adds = [];
        this.lifeTime = 25;
        this.immortal = true;
        this.width = width;
        this.height = height;
        this.position = {
            x: x,
            y: y
        };
    }
    Component.prototype.update = function (deltaTime, handler) {
        if (!deltaTime)
            return;
    };
    Component.prototype.move = function (deltaTime) {
    };
    Component.prototype.borderCollision = function () {
        this.collisionDetected = false;
        if (this.position.x >= 640 - this.width) {
            this.position.x -= 5;
            this.collisionDetected = true;
        }
        if (this.position.x <= 0) {
            this.position.x += 5;
            this.collisionDetected = true;
        }
        if (this.position.y >= 480 - (this.height + 50)) {
            this.position.y -= 5;
            this.collisionDetected = true;
        }
        if (this.position.y <= 0) {
            this.position.y += 5;
            this.collisionDetected = true;
        }
    };
    Component.prototype.draw = function (ctx) {
        this.drawBorder(ctx);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    Component.prototype.drawBorder = function (ctx) {
        if (!this.hasBorder)
            return;
        ctx.fillStyle = this.border;
        ctx.fillRect(this.position.x - 1, this.position.y - 1, this.width + 2, this.height + 2);
    };
    Component.prototype.collision = function (component) {
    };
    Component.prototype.setMoves = function (xMove, yMove) {
        this.xMove = xMove;
        this.yMove = yMove;
    };
    Component.prototype.destroy = function (adds, deltaTime) {
        return adds;
    };
    return Component;
}());
exports["default"] = Component;
//# sourceMappingURL=component.js.map