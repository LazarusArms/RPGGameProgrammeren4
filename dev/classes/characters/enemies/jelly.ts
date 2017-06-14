class Jelly extends Enemy {
    constructor(h) {
        super();

        this.hero = h;

        this.x = this.random * 2000;
        this.y = this.random * 2000;
        this.speedHorizontal = 5;
        this.health = 10;
        this.behaviour = new Alive();

        this.spriteUp1 = new Image(100, 200);
        this.spriteUp2 = new Image(100, 200);
        
        this.spriteUp1.src = '../docs/images/jelly1.png';
        this.spriteUp2.src = '../docs/images/jelly2.png';

        this.sprite = this.spriteUp1;

        console.log(this.sprite);

        this.hero.subscribe(this);

        this.update();
    }

    public update() {
        this.behaviour.update(this.health);
    }




    notify(x, y) {
                // console.log(x);
        // console.log(y);
        console.log(this.random);



        if(x > 0){
            this.x -= this.random * 20;

            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }

        }

        else if(y > 0) {
            this.y -= this.random * 20;

            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }

        else if(x < 0){
            this.x += this.random * 20;

            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }

        else if(y < 0) {
            this.y += this.random * 20;

            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
    }
}