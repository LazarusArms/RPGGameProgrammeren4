# Oldskool Typescript RPG -> Work in progress!


**Installatie instructies**

De game is te spelen via de live omgeving van github, als je het wilt forken is het letterlijk forken -> compilen en gaan.

https://cobesz.github.io/RPGGameProgrammeren4/docs/

## Programmeerprincipes toegepast

**Interface**

in de dev folder heb je het mapje interfaces, hierin heb ik IDrawable en IMove. Ze beschrijven respectievelijk de blueprints voor het tekenen op de canvas en movement voor objecten.

**Static Utility Method**

De static method die ik gebruik is de getInstance method voor de singleton.

**Singleton**

De game class heb ik tot singleton gemaakt, deze is vervolgens overal te bereiken via  `let g = Game.getInstance();`

**Encapsulation**

    class GameObject implements IDrawable {
        protected x: number;
        protected y: number;
        protected speed: number;

        protected sprite: HTMLImageElement;

        constructor() {

        }

**Inheritance**

`class Hero extends GameObject implements IMove { }`


**Overige info**

De UML is te vinden in de root folder van de repo.



** Peer review**

1. Code ziet er prima uit, goed gestructureerd en goed te lezen voor mede-programmeurs. Wat wel handig zou zijn is om eventjes comments in je code neer te zetten zodat het ook voor nieuwe mensen duidelijk is wat er in elke class gebeurt.

Daarnaast heb ik in de hero.ts gekeken naar de animaties van de character. De code zag er prima uit (wel cluttered), maar ik zou het anders hebben gedaan met de code:

    // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = -1;
                this.animationY = 0; 
                break;
            case 39: //RIGHT
                this.directionX = 1;
                this.animationY = 0;
                break;
            case 40: //DOWN
                this.directionY = 1;
                this.animationY = 0;
                break;
            case 37: //LEFT
                this.directionX = -1;
                this.animationX =  7;
                this.animationY =  1; 
                break;
        }
    }

Je animatie word vervolgens opgehaald in gameObject.ts, en wordt vervolgens gedrawed (geloof ik). Ik zou het juist zo maken dat het animeren met een timer gaat. Zie hieronder:

 this.timer++;
            if(this.timer > this.animationSpeed){
                this.currentFrame++;
                this.timer = 0;
            }
            
            if (this.currentFrame > 7   ) {
                this.currentFrame = 0;
            }
        
        this.context.drawImage(
            this.image,
            this.currentFrame * this.frameWidth,
            this.animationY * this.frameHeight,
            this.frameWidth,
            this.frameHeight,
            this.x,
            this.y,
            this.frameWidth,
            this.frameHeight
        );

Voor de rest ziet de code er prima uit en kan ik er geen aanvullingen eraan brengen. De UML ziet er daarnaast prima en duidelijk uit. Heb er tijdens het reviewen ook aardig wat kennis uit opgestoken voor mijn eigen game. Dus het reviewen heeft wederzijds gewerkt voor mij.

