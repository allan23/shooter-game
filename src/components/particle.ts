import Component from "./component";
import Keyboard from "../helpers/keyboard";
import Handler from "../helpers/handler";

export default class Particle extends Component {
    public type = 'particle';
    public baseColor = '#f0f';
    public altColor = '#fff';
    public border = '#000';
    public xMove = 35;
    public yMove = 35;

    constructor(width: number, height: number, x: number, y: number) {
        super(width, height, x, y);
    }


    move(deltaTime: number) {
        this.position.x += this.xMove / deltaTime;
        this.position.y += this.yMove / deltaTime;
        if (this.collisionDetected) {
            this.killMe = true;
        }
        this.color = (this.color === this.baseColor)? this.altColor : this.baseColor;
    }

    update(deltaTime: number, handler: Handler) {
        if (!deltaTime) return;

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
        if (component.type === 'enemy'){
            this.killMe=true;
        }
    }

}
