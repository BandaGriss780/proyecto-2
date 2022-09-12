import React from 'react';
import '../hojas-de-estilo/EstiloContador.css'
function Contador({ numClicks }) {
    return (
        <div className='contador'>
            {numClicks}
        </div>
    );
}

export default Contador;