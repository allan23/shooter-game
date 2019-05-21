"use strict";
exports.__esModule = true;
var Handler = (function () {
    function Handler() {
        this.components = [];
    }
    Handler.prototype.add = function (newComponent) {
        this.components.push(newComponent);
    };
    Handler.prototype.update = function (deltaTime, screen) {
        var killList = [];
        for (var i = 0; i < this.components.length; i++) {
            this.checkCollision(i);
            this.components[i].update(deltaTime);
            this.components[i].draw(screen.ctx);
            this.processAdds(i);
            if (this.components[i].killMe) {
                this.components.splice(i, 1);
            }
        }
    };
    Handler.prototype.processAdds = function (index) {
        for (var i = 0; i < this.components[index].adds.length; i++) {
            this.components.push(this.components[index].adds[i]);
            this.components[index].adds.splice(i, 1);
        }
    };
    Handler.prototype.checkCollision = function (i) {
        var component = this.components[i];
        var originalX = component.position.x;
        var originalY = component.position.y;
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
            var originalX = component_1.position.x;
            var originalY = component_1.position.y;
            for (var x = originalX; x < originalX + component_1.width; x++) {
                for (var y = originalY; y < originalY + component_1.height; y++) {
                    if (x === otherX && y === otherY) {
                        this.components[skip].collision(this.components[i]);
                    }
                }
            }
        }
    };
    return Handler;
}());
exports["default"] = Handler;
//# sourceMappingURL=handler.js.map