import React from "react";
import { useHistory } from 'react-router-dom'




function MenuOpciones(){
    const history = useHistory()
    return(
        <div className='container'>
            <rutas/>
            <h1>Calculos Matematicos</h1>
            <div className='botones'>
                <button onClick={()=>{history.push('/fibonacci')}}>Calcular Fibonacci</button>
                <button onClick={()=>{history.push('/factorial')}}>Calcular Factoriales</button>
                <button onClick={()=>{history.push('/triangulo')}}>Area y Perimetro de Triangulo</button>
                <button onClick={()=>{history.push('/circulo')}}>Area y Perimetro de Circulo</button>
                <button onClick={()=>{history.push('/rectangulo')}}>Area y Perimetro de Rectangulo</button>
            </div>
        </div>    
    )
}
export default MenuOpciones;