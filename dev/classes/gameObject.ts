class GameObject implements IDrawable {
    protected x: number;
    protected y: number;
    protected speed: number;

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