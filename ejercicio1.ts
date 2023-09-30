class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Estudiante extends Persona {
    carrera: string;
    ciclo: string;
    constructor(nombre: string, edad: number, carrera: string, ciclo: string) {
        super(nombre, edad);
        this.carrera = carrera;
        this.ciclo = ciclo;
    }
}
let estudiante = new Estudiante('Juancho Lagarto', 18, 'Ing. Nuclear', 'Primer Ciclo');
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.carrera);
console.log(estudiante.ciclo);