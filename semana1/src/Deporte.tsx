
const Deporte = ({deporte,equipo}: {deporte:string, equipo:string}) => {
  return (
    <div>
        <h1> Este es un componente con variables</h1>
        <h3> Mi deporte favorito es: {deporte}</h3>
        <h3> Mi quipo favorito es: {equipo}</h3>
    </div>
  )
}

export default Deporte