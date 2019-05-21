import Handler from "../helpers/handler";

export default class Component {
    public position = {
        x: 20,
        y: 20,
    };
    public width: number;
    public height: number;

    public xMove = 20;
    public yMove = 20;

    public killMe = false;
    public collisionDetected = false;

    public type = 'component';

    public color = '#000';
    public border = '#fff';
    public hasBorder = true;

    public adds: Component[] = [];

    public lifeTime = 30;
    public immortal = true;

    constructor(width: number, height: number, x: number, y: number) {
        this.width = width;
        this.height = height;

        this.position = {
            x: x,
            y: y,
        };
    }

    update(deltaTime: number) {
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

    move(deltaTime: number) {

    }

    borderCollision() {
        this.collisionDetected = false;
        if (this.position.x >= 640 - this.width) {
            this.position.x -= 5;
            this.collisionDetected = true;
        }

        if (this.position.x <= 0) {
            this.position.x += 5;
            this.collisionDetected = true;
        }

        if (this.position.y >= 480 - this.height) {
            this.position.y -= 5;
            this.collisionDetected = true;
        }

        if (this.position.y <= 0) {
            this.position.y += 5;
            this.collisionDetected = true;
        }

    }

    draw(ctx: CanvasRenderingContext2D) {
        this.drawBorder(ctx);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    drawBorder(ctx: CanvasRenderingContext2D) {
        if (!this.hasBorder) return;
        ctx.fillStyle = this.border;
        ctx.fillRect(this.position.x - 1, this.position.y - 1, this.width + 2, this.height + 2);
    }

    collision(component: Component) {
        console.log(this.type + ' collided with ' + component.type);
    }

    setMoves(xMove: number, yMove: number) {
        this.xMove = xMove;
        this.yMove = yMove;
    }
}
