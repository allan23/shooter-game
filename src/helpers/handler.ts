import component from "../components/component";
import Screen from "../screen/screen";

export default class Handler {
    public components: component[] = [];

    constructor() {

    }

    add(newComponent: component) {
        this.components.push(newComponent);
    }

    update(deltaTime: number, screen: Screen) {
        let killList = [];
        for (let i = 0; i < this.components.length; i++) {
            this.checkCollision(i);
            this.components[i].update(deltaTime);
            this.components[i].draw(screen.ctx);
            this.processAdds(i);
            if (this.components[i].killMe) {
                this.components.splice(i, 1);
            }
        }

    }

    processAdds(index: number) {
        for (let i = 0; i < this.components[index].adds.length; i++) {
            this.components.push(this.components[index].adds[i]);
            this.components[index].adds.splice(i, 1);
        }
    }

    checkCollision(i: number) {
        let component = this.components[i];
        let originalX = component.position.x;
        let originalY = component.position.y;
        for (let x = originalX; x < originalX + component.width; x++) {
            for (let y = originalY; y < originalY + component.height; y++) {
                this.doCheck(i, x, y);
            }
        }
    }

    doCheck(skip: number, otherX: number, otherY: number) {
        for (let i = 0; i < this.components.length; i++) {
            if (i === skip) {
                continue;
            }
            let component = this.components[i];
            let originalX = component.position.x;
            let originalY = component.position.y;
            for (let x = originalX; x < originalX + component.width; x++) {
                for (let y = originalY; y < originalY + component.height; y++) {
                    if (x === otherX && y === otherY) {
                        this.components[skip].collision(this.components[i]);
                    }
                }
            }


        }
    }
}
