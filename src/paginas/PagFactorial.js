import React,{useState} from 'react'
import { controllerFactorial } from '../controller'
import { useHistory } from 'react-router-dom'


export default function PagFactorial() {
    const history = useHistory()
    const [numero, setNumero] = useState(0)
    const [resultFactorial, setResultFactorial] = useState(0)
    function obtenerRestulado(){
        setResultFactorial("")
        setResultFactorial(controllerFactorial(numero))
    }
    return (
        <div className='container'>
            <h1>Calculo Factoriales</h1>
            <form>
                <input type='text' value={resultFactorial} />
                <input type='number' id='inputID' placeholder='Insertar numero'
                    onChange={(e)=> setNumero(e.target.value)}/>
            </form>
            <div className='botones'>
                <button onClick={obtenerRestulado}>Calcular Factorial</button>
                <button onClick={()=>{history.push('/')}}>Regresar</button>
            </div>
            
        </div>
    )
}

