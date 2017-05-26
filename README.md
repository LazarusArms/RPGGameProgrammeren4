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


# Peer Review door Roy Sijnesael

Het project voldoet bijna aan alle eisen. Het mist alleen nog een strategy pattern. Tevens is er niet aangegeven in de UML, welke onderdelen werkend zijn en wat niet. Verder werkt alles prima en staat de code netjes gestructureerd en is het leesbaar. In de README staan alle pricipes goed uitgelegd en waar deze zich bevinden. Het project krijgt van mij een voldoende.

## Verbetering die gemaakt is

Ik heb een Strategy Pattern toegevoegd aan de Hero Class. Ik heb een Behaviour Interace aangemaakt die een update() functie heeft. Ook heb ik een Alive class gemaakt die Behaviour implementeert, deze moet dus een update (met een health parameter) functie hebben. De Hero class heeft een Health Waarde gekregen die naar 10 gezet wordt. Wanneer de Health van de Hero lager wordt dan 1 (0 dus), wordt er een alert getoond met 'Game Over!'. Als het boven 0 is, console.log'd hij 'You're alive!'.

