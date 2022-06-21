import React from 'react';
import '../hojas-de-estilo/Pantalla.css';
//Definiendo la funcion como funcion felcha para componentes sencillos
const Pantalla = ({ input }) => ( //Sintaxis de desestructuracion-tema de los props
  <div className='input'>
    {input}      
  </div>
); 

export default Pantalla;