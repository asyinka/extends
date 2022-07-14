
class ability{

    constructor (colour, weight, origin){
        this.colour = colour;
        this.weight = weight;
        this.origin = origin;
    };

    alive = true;

    run(){
        console.log(`This ${this.name} can run`)
    };
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    };


}

class rabbit extends ability{
    
    constructor(colour, weight, origin, hair){
        super (colour, weight, origin);
        this.hair = hair;
    }

    name = "rabbit";
    hairy(){
        console.log(`This ${this.name} has hairs`)
    };
    
};

class duck extends ability{

    constructor(colour, weight, origin, feathers){
        super (colour, weight, origin);
        this.feathers = feathers;
    }
    name = "duck";
    
    fly(){
        console.log(`This ${this.name} is flying`)
    }
};

const rabbitG = new rabbit("Purple", 15, "Ethopean", "Hairy")

const duck1 = new duck("White", 20, "African", "Fluffy");
const rabbit1 = new rabbit("White", 20, "African", "hairy");

console.log(duck1.alive)
duck1.run();
rabbit1.sleep();
console.log(duck1.weight);
console.log(rabbitG.origin)
console.log(rabbitG.colour);
console.log(rabbit1.weight)

class goat{

    constructor(hairs, sound, weight){
        this.hairs = hairs;
        this.sound = sound;
        this._weight = weight;
    }
    get weight(){
        return `${this._weight}Kg`
    } 

    name = "Goat";
    
    run(){
        console.log(`This ${this.name} is running`)
    }
};

const Goat = new goat(`hairy`, `bleats`, `29`)

console.log(`The first goat is ${Goat.hairs}`);
console.log(`The first goat weighs ${Goat.weight}`)

Goat.weight = 35;

console.log(Goat.weight)

const Patience = new goat (`hairy`, `bleats`, 22);
console.log(Patience.weight)
