export default class Keyboard {
    public left = false;
    public right = false;
    public up = false;
    public down = false;
    public shoot = false;

    constructor() {
        document.addEventListener('keydown', (event) => {
            this.keyDownHandler(event)
        }, false);
        document.addEventListener('keyup', (event) => {
            this.keyUpHandler(event)
        }, false);
    }


    public keyDownHandler(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 39:
                this.right = true;
                break;
            case 37:
                this.left = true;
                break;
            case 40:
                this.down = true;
                break;
            case 38:
                this.up = true;
                break;
            case 32:
                this.shoot = true;
                break;
        }
    }

    public keyUpHandler(event: KeyboardEvent) {

        switch (event.keyCode) {
            case 39:
                this.right = false;
                break;
            case 37:
                this.left = false;
                break;
            case 40:
                this.down = false;
                break;
            case 38:
                this.up = false;
                break;
            case 32:
                this.shoot = false;
                break;
        }
    }

}
