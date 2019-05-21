import Component from "./component";
import Keyboard from "../helpers/keyboard";

export default class Particle extends Component {
    public type = 'particle';
    public color = '#f0f';
    public hasBorder = false;
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
    }


}
