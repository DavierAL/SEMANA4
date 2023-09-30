class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Perro extends Animal {
    raza: string;
    constructor(name: string, age: number, raza: string) {
        super(name, age);
        this.raza = raza;
    }
}

let perro = new Perro('Firulais', 2, 'Pastor Alemán');
console.log(perro);
