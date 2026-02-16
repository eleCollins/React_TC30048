import React from 'react'
import { bancos } from './bancos.js'

const Bancos = () => {
    return (
        <div>
            <h1> Este es un componente con uso de archivo de importación </h1>
            <h2> Listado de Bancos</h2>
            <ul>
                {bancos.map((banco) => (
                    <li key={banco.id}>
                        {banco.id} — {banco.name}
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default Bancos