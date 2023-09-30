class Fruta {
    description(): string {
        return 'Esta es una fruta generica';
    }
}

class Manzana extends Fruta {
    description(): string {
        return 'Esta es una manzana';
    }
}

class Pera extends Fruta {
    description(): string {
        return 'Esta es una pera';
    }
}

class Mango extends Fruta {
    description(): string {
        return 'Esto es un mango';
    }
}

let manzana = new Manzana();
console.log(manzana.description());
let pera = new Pera();
console.log(pera.description())
let mango = new Mango();
console.log(mango.description())