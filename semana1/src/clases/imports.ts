import {bancos} from './bancos.js'

const getBancoId = (id: number) => bancos.find((banco) => banco.id === id);
console.log(bancos);