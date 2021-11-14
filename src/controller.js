import fibonacci from './Backend/Validacion/ValidacionFibonacci'
import circulo from './Backend/Validacion/ValidacionCirculo'
import factorial from './Backend/Validacion/ValidacionFactorial'
import rectangulo from './Backend/Validacion/ValidacionRectangulo'
import triangulo from './Backend/Validacion/ValidacionTriangulo'

function controllerFibonacci(numero) {
    return fibonacci(numero)
}

function controllerCirculo(radio, type){
    return circulo(radio,type)
}

function controllerFactorial(numero){
    return factorial(numero)
}

function controllerRectangulo(ancho, alto, type){
    return rectangulo(ancho,alto, type)
}

function controllerTriangulo(lado1,lado2,lado3,type){
    return triangulo(lado1,lado2,lado3,type)
}

export {controllerFibonacci, controllerCirculo, controllerFactorial, controllerRectangulo,
        controllerTriangulo}
