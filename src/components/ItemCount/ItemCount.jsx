import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    /*
    const boton = document.getElementById("boton1")
    console.log(boton) NO SE PUEDE*/
                            //1
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <div>
           <button className='btn btn-outline-danger boton_Compra' onClick={() => restar()}>-</button>
           <button className='btn btn-disabled boton_Compra' >{contador}</button>    
            <button className='btn btn-outline-primary boton_Compra' onClick={() => sumar()}>+</button>
            <button className='btn btn-primary boton_Compra'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
