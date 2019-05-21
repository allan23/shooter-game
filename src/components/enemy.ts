import Component from "./component";
import Keyboard from "../helpers/keyboard";

export default class Enemy extends Component {
    public type = 'enemy';
    public color = '#cfc';
    public hasBorder = true;

    constructor(width: number, height: number, x: number, y: number) {
        super(width, height, x, y);
    }


    move(deltaTime: number) {

    }
}
