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


# Peer Review 2 door Roy Sijnesael (15-06)

Het project voldoet in de volgende opzichten:

- Klassendiagram (alleen niet geupdated)
- Speelbare game met begin en eind, zonder bugs
- encapsulation, composition, inheritance
- Singleton, Observer, Strategy
- interface, static
- Game Loop

Helaas zijn de andere eisen niet terug gekomen in de game.

## Beoordeling

De game is speelbaar, maar heeft geen duidelijk einde. Er missen ook een hoop eisen: 

- Gebruik van een library 
- Abstracts 
- Polymorphism 
- Enumarations 
- Namespaces
- Readme.md file waarin bovenstaande wordt toegelicht

Hierdoor krijgt het project van mij een voldoende.

Of nee toch niet.

![UML](./docs/images/heinrich.jpg?raw=true "heinrich")

# Feedback Week 7: Erhan Akin

Er is veel progressie geboekt sinds de laatste Peer Review. Code is uitgbereid met goeie interactie in de game. Inheritance, Encapsulation Composition, Singleton, Observer & Strategy zijn allemaal verwerkt in je code. Daarnaast is het nice dat jook een interface folder gemaakt heb met daarin de vereisten functies voor elke class.
Ook het gebruik van static classes is te zien. Game is enigszins speelbaar. Het idee om een nieuwe view toe te voegen in 'battle' modes wekt bij mij heel erg veel enthousiasme op.

Sommige eisen zijn alleen nog niet zichtbaar in de game, zoals het gebruik van een Library. Daarnaast ontbreekt ook enige vorm van enumerations (die ik heb toegevoegd in je game code).

De code is te vinden in gameObject.ts en hero.ts, ik zal die ook even hieronder vermelden ter verduidelijking:

-> In gameObject.ts:

enum isDead {
    YES,
    NO
    }

&

protected isDead: isDead = isDead.NO;


-> In hero.ts:

dead(){
        this.isDead = isDead.YES;
        console.log('YOU DIED');
    }

De Enumeration is hierbij toegevoegd als opvulling.





