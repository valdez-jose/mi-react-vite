import Cabecera from './components/Cabecera'
import Testimonios from './components/Testimonios'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Cabecera />
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
        
        <Testimonios 
         nombre="Emma Bostian"
         pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de software"
          empresa="Spotify"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
        <Testimonios 
         nombre='Sarah Chima'
         pais='Nigeria'
         imagen='sarah'
         cargo='Ingeniera de Software'
         empresa='ChatDesk'
         testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
        <Testimonios 
           nombre='Shawn Wang '
           pais='Singapur'
            imagen='shawn'
            cargo='Ingeniera de Software'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
      </div>
   </div>
  )
}

export default App
