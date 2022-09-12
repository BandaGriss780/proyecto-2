import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from '../src/componentes/Boton.js';
import Contador from '../src/componentes/Contador.js';
import { useState } from 'react';


function App() {
  
  const [numClicks, setNumClicks] = useState(0);
  
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }
  
  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
        className='freeCodeCamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
        className=''
        numClicks={numClicks} />
        <Boton 
        texto='click'
        esBotonDeClick={true}
        manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
