import React,{useState} from 'react'
import { controllerFibonacci } from '../controller'
import { useHistory } from 'react-router-dom'

export default function PagFibonachi() {
    
    const [numero, setNumero] = useState(0)
    const [resultFibonacci, setResultFibonacci] = useState(0)
    function obtenerRestulado(){
        setResultFibonacci("")
        setResultFibonacci(controllerFibonacci(numero))
    }
    const history = useHistory()
    return (
        <div className='container'>
            <h1>Calculo Fibonacci</h1>
            <form>
                <input type='text' value={resultFibonacci} />
                <input type='number' id='inputID' placeholder='Insertar numero'
                    onChange={(e)=> setNumero(e.target.value)}/>
            </form>
            <div className='botones'>
                <button onClick={obtenerRestulado}>Calcular Num Fibonacci</button>
                <button onClick={()=>{history.push('/')}}>Regresar</button>
            </div>
            
        </div>
    )
}

