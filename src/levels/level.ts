import Handler from "../helpers/handler";
import Enemy from "../components/enemy";
import Screen from "../screen/screen";

export default class Level {
    public handler: Handler;

    constructor() {

        this.handler = new Handler();

    }

    update(deltaTime: number, screen: Screen) {
        this.handler.update(deltaTime, screen);
    }
}
