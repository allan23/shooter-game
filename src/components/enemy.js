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
var particle_1 = require("./particle");
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(width, height, x, y) {
        var _this = _super.call(this, width, height, x, y) || this;
        _this.type = 'enemy';
        _this.color = '#cfc';
        _this.hasBorder = true;
        _this.goingDown = true;
        _this.goingLeft = true;
        _this.xMove = 10;
        _this.yMove = 10;
        _this.maxSpeed = 60;
        return _this;
    }
    Enemy.prototype.move = function (deltaTime) {
        if (this.goingDown) {
            this.position.y += this.yMove / deltaTime;
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
            this.position.x -= this.xMove / deltaTime;
        }
        else {
            this.position.x += this.xMove / deltaTime;
        }
    };
    Enemy.prototype.slowDown = function (deltaTime) {
        if (this.yMove < 0) {
            this.yMove = 0;
        }
        if (this.yMove === 0)
            return;
        this.yMove -= 2 / deltaTime;
    };
    Enemy.prototype.speedUp = function (deltaTime) {
        if (this.yMove > this.maxSpeed) {
            this.yMove = this.maxSpeed;
        }
        if (this.yMove === this.maxSpeed)
            return;
        this.yMove += 20 / deltaTime;
    };
    Enemy.prototype.chasePlayer = function (player) {
        this.goingLeft = (player.x < this.position.x);
        this.goingDown = (player.y > this.position.y);
    };
    Enemy.prototype.update = function (deltaTime, handler) {
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
    Enemy.prototype.collision = function (component) {
        if (component.type === 'particle') {
            this.killMe = true;
        }
    };
    Enemy.prototype.destroy = function (adds, deltaTime) {
        var pWidth = 5;
        var pHeight = 5;
        var particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
        for (var i = 0; i < 3; i++) {
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
            particle = new particle_1["default"](pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
        }
        return adds;
    };
    return Enemy;
}(component_1["default"]));
exports["default"] = Enemy;
//# sourceMappingURL=enemy.js.map