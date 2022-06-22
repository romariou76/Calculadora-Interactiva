import '../hojas-de-estilo/Boton.css';

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '='); //Si el valor no es un numero, un punto o igual entoncs consideramos como operador y devulve true, si se cumplen retorna falso
    };                                                             //trimEnd para ocultar espacios
    return (                                                       //En la linea 11 definimos 2 clases , boton-contnedor y operador
                                                                   // En linea 13Este funcion anonima devuelve el resultado de llamar a la funcion manejarclic
        <button
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}> 
            {props.children}
        </button>
    )
}
export default Boton;