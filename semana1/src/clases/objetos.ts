const estudiante = {
    matricula: 'A01285888',
    nombre: 'Lucio',
    edad: 21,
    direccion: {
        ciudad: 'Monterrey',
        cp: 64800
    }
};

console.table(estudiante);
console.log(estudiante);

const estudiante2 = {...estudiante};
estudiante2.nombre = 'Ramon';

console.log(estudiante2)