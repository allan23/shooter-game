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
var enemy_1 = require("../components/enemy");
var player_1 = require("../components/player");
var component_1 = require("../components/component");
var level_1 = require("./level");
var Level1 = (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        var _this = _super.call(this) || this;
        _this.ebX = 580;
        _this.ebY = 400;
        _this.spawnDelay = 10;
        _this.spawnCount = 10;
        _this.maxEnemies = 2;
        _this.enemyBase();
        _this.playerBase();
        var enemyX = 400;
        var enemyY = 200;
        _this.spawnEnemy();
        return _this;
    }
    Level1.prototype.playerBase = function () {
        var base = new component_1["default"](40, 40, 10, 10);
        base.color = '#ffc';
        this.handler.add(base);
        this.handler.add(new player_1["default"](20, 20, 20, 20));
    };
    Level1.prototype.enemyBase = function () {
        var base = new component_1["default"](40, 40, this.ebX, this.ebY);
        base.color = '#00f';
        this.handler.add(base);
    };
    Level1.prototype.spawnEnemy = function () {
        this.handler.add(new enemy_1["default"](20, 20, this.ebX + 10, this.ebY + 10));
    };
    Level1.prototype.update = function (deltaTime, screen) {
        this.spawnCount -= 0.025;
        console.log(this.handler.getEnemyCount());
        if (this.spawnCount <= 0 && this.maxEnemies >= this.handler.getEnemyCount()) {
            this.spawnEnemy();
            this.spawnCount = this.spawnDelay;
        }
        this.handler.update(deltaTime, screen);
    };
    return Level1;
}(level_1["default"]));
exports["default"] = Level1;
//# sourceMappingURL=level-1.js.map