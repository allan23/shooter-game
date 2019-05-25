import component from "../components/component";
import Screen from "../screen/screen";

export default class Handler {
    public components: component[] = [];
    public adds: component[] = [];
    public counts: any = {};
    public enemyCount = 0;

    public playerPos: object = {
        x: 20,
        y: 20,
    };

    constructor() {

    }

    add(newComponent: component) {
        this.adds.push(newComponent);
    }

    update(deltaTime: number, screen: Screen) {
        this.finalAdds();
        this.counts = {};
        this.enemyCount = 0;
        let killList = [];
        for (let i = 0; i < this.components.length; i++) {

            if (this.components[i].killMe) {
                this.adds = this.components[i].destroy(this.adds, deltaTime);
                this.components.splice(i, 1);
                continue;
            }

            this.components[i].update(deltaTime, this);
            this.components[i].draw(screen.ctx);
            this.processAdds(i);
            if (this.components[i].type === 'player') {
                this.playerPos = this.components[i].position;
            }

            if (this.components[i].type === 'enemy') {
                this.enemyCount++;
            }

            this.checkCollision(i);
            this.counts[this.components[i].type]++;

        }


    }

    finalAdds() {
        for (let i = 0; i < this.adds.length; i++) {
            this.components.push(this.adds[i]);
        }
        this.adds = [];
    }

    processAdds(index: number) {
        for (let i = 0; i < this.components[index].adds.length; i++) {
            this.components.push(this.components[index].adds[i]);
            this.components[index].adds.splice(i, 1);
        }
    }

    checkCollision(i: number) {
        let component = this.components[i];
        if (component.type === 'component') {
            return;
        }
        let originalX = Math.ceil(component.position.x);
        let originalY = Math.ceil(component.position.y);

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


            let originalX = Math.ceil(component.position.x);
            let originalY = Math.ceil(component.position.y);
            for (let x = originalX; x < originalX + component.width; x++) {
                for (let y = originalY; y < originalY + component.height; y++) {
                    if (x === otherX && y === otherY) {
                        //console.log(this.components[skip].type + ' collided with ' + component.type);
                        this.components[skip].collision(this.components[i]);
                        break;
                    }
                }
            }


        }
    }

    getCountByType(type: string) {
        return this.counts[type];
    }

    getEnemyCount() {
        return this.enemyCount;
    }
}
