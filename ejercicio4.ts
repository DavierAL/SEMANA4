class Animals {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log('Sonido Generico');
    }
}

class Dog extends Animals {

    makeSound() {
        console.log('Guau');
    }
}

class Cat extends Animals {

    makeSound() {
        console.log('Miau');
    }
}

class Chimp extends Animals {

    makeSound()  {
        console.log('Chimp');
    }
}

let dog = new Dog('Rex');
let cat = new Cat('Garfield');
let chimp = new Chimp('Jackson');

dog.makeSound();
cat.makeSound();
chimp.makeSound();

