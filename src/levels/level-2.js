"use strict";
exports.__esModule = true;
var enemy_1 = require("../components/enemy");
var player_1 = require("../components/player");
var Level2 = (function () {
    function Level2(handler) {
        handler.add(new player_1["default"](20, 20, 20, 20));
        var enemyX = 100;
        var enemyY = 20;
        var enemyCount = 0;
        setInterval(function () {
            if (enemyCount > 10)
                return;
            var enemy = new enemy_1["default"](20, 20, enemyX, enemyY);
            enemy.color = '#fff';
            handler.add(enemy);
            enemyCount++;
            if (enemyX > 620) {
                enemyX -= 40;
            }
            else {
                enemyX += 40;
            }
        }, 1000);
    }
    return Level2;
}());
exports["default"] = Level2;
//# sourceMappingURL=level-2.js.map