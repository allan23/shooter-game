"use strict";
exports.__esModule = true;
var Handler = (function () {
    function Handler() {
        this.components = [];
        this.adds = [];
        this.counts = {};
        this.enemyCount = 0;
        this.playerPos = {
            x: 20,
            y: 20
        };
    }
    Handler.prototype.add = function (newComponent) {
        this.adds.push(newComponent);
    };
    Handler.prototype.update = function (deltaTime, screen) {
        this.finalAdds();
        this.counts = {};
        this.enemyCount = 0;
        var killList = [];
        for (var i = 0; i < this.components.length; i++) {
            if (this.components[i].killMe) {
                this.adds = this.components[i].destroy(this.adds, deltaTime);
                this.components.splice(i, 1);
                continue;
            }
            this.components[i].update(deltaTime, this);
            this.components[i].draw(screen.ctx);
            this.processAdds(i);
            if (this.components[i].type === 'player') {
                this.playerPos = this.components[i].position;
            }
            if (this.components[i].type === 'enemy') {
                this.enemyCount++;
            }
            this.checkCollision(i);
            this.counts[this.components[i].type]++;
        }
    };
    Handler.prototype.finalAdds = function () {
        for (var i = 0; i < this.adds.length; i++) {
            this.components.push(this.adds[i]);
        }
        this.adds = [];
    };
    Handler.prototype.processAdds = function (index) {
        for (var i = 0; i < this.components[index].adds.length; i++) {
            this.components.push(this.components[index].adds[i]);
            this.components[index].adds.splice(i, 1);
        }
    };
    Handler.prototype.checkCollision = function (i) {
        var component = this.components[i];
        if (component.type === 'component') {
            return;
        }
        var originalX = Math.ceil(component.position.x);
        var originalY = Math.ceil(component.position.y);
        for (var x = originalX; x < originalX + component.width; x++) {
            for (var y = originalY; y < originalY + component.height; y++) {
                this.doCheck(i, x, y);
            }
        }
    };
    Handler.prototype.doCheck = function (skip, otherX, otherY) {
        for (var i = 0; i < this.components.length; i++) {
            if (i === skip) {
                continue;
            }
            var component_1 = this.components[i];
            var originalX = Math.ceil(component_1.position.x);
            var originalY = Math.ceil(component_1.position.y);
            for (var x = originalX; x < originalX + component_1.width; x++) {
                for (var y = originalY; y < originalY + component_1.height; y++) {
                    if (x === otherX && y === otherY) {
                        this.components[skip].collision(this.components[i]);
                        break;
                    }
                }
            }
        }
    };
    Handler.prototype.getCountByType = function (type) {
        return this.counts[type];
    };
    Handler.prototype.getEnemyCount = function () {
        return this.enemyCount;
    };
    return Handler;
}());
exports["default"] = Handler;
//# sourceMappingURL=handler.js.map