import Component from "./component";
import Keyboard from "../helpers/keyboard";
import Particle from "./particle";
import Handler from "../helpers/handler";

export default class Player extends Component {
    public keyboard: Keyboard;

    public type = 'player';
    public xMove = 50;
    public yMove = 50;
    public shootDelay = 20;
    public currentDelay = 0;

    constructor(width: number, height: number, x: number, y: number) {
        super(width, height, x, y);
        this.keyboard = new Keyboard();
    }


    move(deltaTime: number) {

        if (this.keyboard.left) {
            this.position.x -= this.xMove / deltaTime;
        }
        if (this.keyboard.right) {
            this.position.x += this.xMove / deltaTime;
        }
        if (this.keyboard.up) {
            this.position.y -= this.yMove / deltaTime;
        }
        if (this.keyboard.down) {
            this.position.y += this.yMove / deltaTime;
        }
    }

    update(deltaTime: number, handler: Handler) {

        if (!deltaTime) return;
        this.maybeShoot(deltaTime);
        this.move(deltaTime);
        this.borderCollision();
    }

    maybeShoot(deltaTime: number) {
        if (this.keyboard.shoot && this.currentDelay === 0) {
            this.adds.push(new Particle(3, 3, this.position.x + this.width, this.position.y + this.height))
            this.currentDelay = this.shootDelay;
        }
        if (this.currentDelay !== 0) {
            this.currentDelay--
        }
    }

    collision(component: Component) {
        if (component.type === 'enemy') {
            this.position.x = 20;
            this.position.y = 20;
        }
    }
}
