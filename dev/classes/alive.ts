class Alive implements Behaviour {

    public update(health : number) : void {
        console.log(health);
        
        if(health < 1) {
            alert('Game over!');
        } else {
            console.log('You are alive!');
        }
    }
}