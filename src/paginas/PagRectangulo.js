import React,{useState} from 'react'
import { controllerRectangulo } from '../controller'
import { useHistory } from 'react-router-dom'



export default function PagRectangulo() {
    const [ancho, setAncho] = useState(0)
    const [alto, setAlto] = useState(0)
    const [resultArea, setResultArea] = useState(0)
    const [resultPerimetro, setResultPerimetro] = useState(0)
    function obtenerRestulado(){
        setResultArea("")
        setResultPerimetro("")
        setResultArea(controllerRectangulo(ancho,alto,0))
        setResultPerimetro(controllerRectangulo(ancho,alto,1))
    }
    const history = useHistory()
    return (
        <div className='container'>
            <h1>Calculos Rectangulo</h1>
            <form>
                <input type='text' value={resultArea} />
                <input type='text' value={resultPerimetro} />
                <input type='number' id='inputID' placeholder='Insertar la altura del rectangulo'
                    onChange={(e)=> setAlto(e.target.value)}/>
                <input type='number' id='inputID' placeholder='Insertar la anchura del rectangulo'
                onChange={(e)=>setAncho(e.target.value)}/>
            </form>
            <div className='botones'>
                <button onClick={obtenerRestulado}>Calcular</button>
                <button onClick={()=>{history.push('/')}}>Regresar</button>
            </div>
        </div>
    )
}
