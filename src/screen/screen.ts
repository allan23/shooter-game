export default class Screen {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('gameScreen');
        this.ctx = this.canvas.getContext('2d');
    }
}
