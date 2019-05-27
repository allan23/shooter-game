import Handler from "../helpers/handler";
import Enemy from "../components/enemy";
import Player from "../components/player";
import Component from "../components/component";
import Bouncy from "../components/bouncy";
import Level from "./level";
import Screen from "../screen/screen";

export default class Level1 extends Level {
    public ebX = 580;
    public ebY = 400;
    public spawnDelay = 10;
    public spawnCount = 10;
    public maxEnemies = 2;

    constructor() {
        super();
        this.enemyBase();
        this.playerBase();
        let enemyX = 400;
        let enemyY = 200;
        this.spawnEnemy();
        //handler.add(new Bouncy(60, 20, enemyX, enemyY));
    }

    playerBase() {
        let base = new Component(40, 40, 10, 10);
        base.color = '#ffc';
        this.handler.add(base);
        this.handler.add(new Player(20, 20, 20, 20));
    }

    enemyBase() {
        let base = new Component(40, 40, this.ebX, this.ebY);
        base.color = '#00f';
        this.handler.add(base);
    }

    spawnEnemy() {
        this.handler.add(new Enemy(20, 20, this.ebX + 10, this.ebY + 10));
    }

    update(deltaTime: number, screen: Screen) {

        this.spawnCount -= 0.025;
        console.log(this.handler.getEnemyCount());
        if (this.spawnCount <= 0 && this.maxEnemies >= this.handler.getEnemyCount()) {
            this.spawnEnemy();
            this.spawnCount = this.spawnDelay;
        }

        this.handler.update(deltaTime, screen);
    }
}
