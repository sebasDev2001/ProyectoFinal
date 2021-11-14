import React, {useState} from 'react'
import { controllerTriangulo } from '../controller'
import { useHistory } from 'react-router-dom'

export default function PagTriangulo() {
    const [lado1, setLado1] = useState(0)
    const [lado2, setLado2] = useState(0)
    const [lado3, setlado3] = useState(0)
    const [resultArea, setResultArea] = useState(0)
    const [resultPerimetro, setResultPerimetro] = useState(0)
    function obtenerRestulado(){
        setResultArea("")
        setResultPerimetro("")
        setResultArea(controllerTriangulo(lado1,lado2,lado3,1))
        setResultPerimetro(controllerTriangulo(lado1,lado2,lado3,0))
    }
    const history = useHistory()
    return (
        <div className='container'>
            <h1>Calculos Triangulo</h1>
            <form>
                <input type='text' value={resultArea} />
                <input type='text' value={resultPerimetro} />
                <input type='number' id='inputID' placeholder='Insertar lado 1'
                    onChange={(e)=> setLado1(e.target.value)}/>
                <input type='number' id='inputID' placeholder='Insertar lado 2'
                onChange={(e)=> setLado2(e.target.value)}/>
                <input type='number' id='inputID' placeholder='Insertar lado 3'
                onChange={(e)=> setlado3(e.target.value)}/>
            </form>
            <div className='botones'>
                <button onClick={obtenerRestulado}>Calcular</button>
                <button onClick={()=>{history.push('/')}}>Regresar</button>
            </div>
        </div>
    )
}
