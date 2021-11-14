import React,{useState} from 'react'
import { controllerCirculo } from '../controller'
import { useHistory } from 'react-router-dom'

export default function PagCirculo() {
    
    const [radio, setRadio] = useState(0)
    const [resultArea, setResultArea] = useState(0)
    const [resultPerimetro, setResultPermietro] = useState(0)
    function obtenerRestulado(){
        setResultArea("")
        setResultPermietro("")
        setResultArea(controllerCirculo(radio,0))
        setResultPermietro(controllerCirculo(radio,1))
    }
    const history = useHistory()
    return (
        <div className='container'>
            <h1>Pagina Calculos del Circulo</h1>
            <form>
                <input type='text' value={resultArea} />
                <input type='text' value={resultPerimetro} />
                <input type='number' id='inputID' placeholder='Insertar radio del circulo'
                    onChange={(e)=> setRadio(e.target.value)}/>
            </form>
            <div className='botones'>
                <button onClick={obtenerRestulado}>Calcular Area y Perimetro</button>
                <button onClick={()=>{history.push('/')}}>Regresar</button>
            </div> 
        </div>
    )
}

