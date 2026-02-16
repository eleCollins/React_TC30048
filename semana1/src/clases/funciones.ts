function saludar(nombre:string){
    return `Hola ${nombre}`
}

const saludarFlecha = (nombre: string): string => {
    return `Hola ${nombre}`;
};


const msg = saludar(`Lucio`);
const msg2 = saludarFlecha('Collins')

console.log(msg);
console.log(msg2);