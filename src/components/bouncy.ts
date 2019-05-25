import Component from "./component";
import Keyboard from "../helpers/keyboard";
import Handler from "../helpers/handler";
import Enemy from "./enemy";

export default class Bouncy extends Enemy {
    public type = 'enemy';
    public color = '#cfc';
    public hasBorder = true;
    public goingDown = true;
    public goingLeft = true;
    public xMove = 5;
    public yMove = 5;
    public maxSpeed = 260;

    constructor(width: number, height: number, x: number, y: number) {
        super(width, height, x, y);
    }


    move(deltaTime: number) {
        if (this.position.y < 10) {
            this.goingDown = true;
        } else if (this.position.y > 360) {
            this.goingDown = false;
        }
        if (this.goingDown) {
            this.position.y += this.yMove / deltaTime;
            this.speedUp(deltaTime);
        } else {
            this.position.y -= this.yMove / deltaTime;
            //  this.slowDown(deltaTime);
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
        } else {
            this.position.x += 10 / deltaTime;
        }

    }

    slowDown(deltaTime: number) {
        if (this.yMove < 0) {
            this.yMove = 0;
        }
        if (this.yMove === 0) return;

        this.yMove -= 2 / deltaTime;
    }

    speedUp(deltaTime: number) {
        if (this.yMove > this.maxSpeed) {
            this.yMove = this.maxSpeed;
        }
        if (this.yMove === this.maxSpeed) return;

        this.yMove += 20 / deltaTime;
    }

    chasePlayer(player: any) {
        this.goingLeft = (player.x < this.position.x);

    }


    update(deltaTime: number, handler: Handler) {
        if (!deltaTime) return;
        this.chasePlayer(handler.playerPos);
        this.move(deltaTime);
        this.borderCollision();
        if (!this.immortal) {
            this.lifeTime--;
            if (this.lifeTime <= 0) {
                this.killMe = true;
            }
        }
    }

}
