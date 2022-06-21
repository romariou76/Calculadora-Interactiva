import react from 'react';

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '='); //Si el valor no es un numero, un punto o igual entoncs consideramos como operador y devulve true, si se cumplen retorna falso
    };                                                             //trimEnd para ocultar espacios
    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>
    )
}
export default Boton;