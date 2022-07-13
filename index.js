
class ability{

    alive = true;

    run(){
        console.log(`This ${this.name} can run`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class rabbit extends ability{

    
    name = "rabbit";

    hairy(){
        console.log(`This ${this.name} has hairs`)
    }
    
};

class duck extends ability{

    name = "duck";
    run(){
        console.log(`This ${this.name} can run`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
    fly(){
        console.log(`This ${this.name} is flying`)
    }
};

const duck1 = new duck();
const rabbit1 = new rabbit();

console.log(duck1.alive)
duck1.run();
rabbit1.sleep();