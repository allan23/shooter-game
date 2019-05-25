import Component from "./component";
import Keyboard from "../helpers/keyboard";
import Handler from "../helpers/handler";
import Particle from "./particle";

export default class Enemy extends Component {
    public type = 'enemy';
    public color = '#cfc';
    public hasBorder = true;
    public goingDown = true;
    public goingLeft = true;
    public xMove = 10;
    public yMove = 10;
    public maxSpeed = 60;

    constructor(width: number, height: number, x: number, y: number) {
        super(width, height, x, y);
    }


    move(deltaTime: number) {

        //this.speedUp(deltaTime);
        if (this.goingDown) {
            this.position.y += this.yMove / deltaTime;
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
            this.position.x -= this.xMove / deltaTime;
        } else {
            this.position.x += this.xMove / deltaTime;
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
        this.goingDown = (player.y > this.position.y);
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

    collision(component: Component) {
        if (component.type === 'particle') {
            this.killMe = true;
        }
    }

    destroy(adds: Component[],deltaTime: number) {
        let pWidth = 5;
        let pHeight = 5;


        let particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);

        for (let i = 0; i < 3; i++) {
            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);

            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.immortal = false;
            adds.push(particle);


            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);


            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = (i === 2) ? '#000' : '#fff';
            particle.xMove = -(particle.yMove  - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);

            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);

            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.immortal = false;
            adds.push(particle);


            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.yMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);


            particle = new Particle(pWidth, pHeight, this.position.x, this.position.y);
            particle.color = '#ffa500';
            particle.xMove = -(particle.yMove - i / deltaTime);
            particle.immortal = false;
            adds.push(particle);
        }

        return adds;
    }

}
