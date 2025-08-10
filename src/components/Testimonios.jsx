
import '../hoja-de-estilo/Testimonio.css';

const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
       <img
        className='imagen-testimonio'
        src={`imagenes/testimonio-${props.imagen}.jpg`}
        alt={`Foto de ${props.nombre}`}
      />
        <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          {props.nombre} en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en {props.empresa}
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>
    </div>
  )
}

export default Testimonio
