import React from 'react';
import '../hojas-de-estilo/Pantalla.css';
//Definiendo la funcion como funcion felcha para componentes sencillos
const Pantalla = ({ input2 }) => ( //Sintaxis de desestructuracion-tema de los props
  <div className='input'>
    {input2}      
  </div>
); 

export default Pantalla;