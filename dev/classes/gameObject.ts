class GameObject implements IDrawable {
    protected x: number;
    protected y: number;
    protected speedHorizontal: number = 0;
    protected speedVertical : number = 0;

    protected sprite: HTMLImageElement;

    constructor() {

    }

    public draw() {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
        // console.log(this.x, this.y);
    }

    public update() {

    }
}