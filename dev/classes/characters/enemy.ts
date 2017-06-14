class Enemy extends GameObject implements Observer {

    protected hero;

    protected spriteUp1: HTMLImageElement;
    protected spriteUp2: HTMLImageElement;
    protected spriteLeft1: HTMLImageElement;
    protected spriteLeft2: HTMLImageElement;
    protected spriteDown1: HTMLImageElement;
    protected spriteDown2: HTMLImageElement;
    protected spriteRight1: HTMLImageElement;
    protected spriteRight2: HTMLImageElement;
    protected behaviour: Behaviour;
    protected health: number;

    constructor() {
        super();

    }



    notify(x, y) {

    }
}