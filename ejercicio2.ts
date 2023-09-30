class Vehiculo {
    marca: string;
    modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Car extends Vehiculo {
    numeroDepuerta: number;
    gama: string;
    constructor(marca: string, modelo: string, numeroDepuerta: number, gama: string) {
        super(marca, modelo);
        this.numeroDepuerta = numeroDepuerta;
        this.gama = gama;
    }
}

let car1 = new Car('Ford', 'Mustang', 2, 'Alta');
console.log(car1);

