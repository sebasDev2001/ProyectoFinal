import { calcularAreaTriangulo, calcularPerimetroTriangulo } from "../Calculos/CalculoTriangulo";

function triangulo (lado1, lado2, lado3, type){ //type 1: area
    if(lado1 && lado2 && lado3 && (lado1&&lado2&&lado3)!=0){
        lado1 = parseFloat(lado1, 10)
        lado2 = parseFloat(lado2, 10)
        lado3 = parseFloat(lado3, 10)
        if(lado1<0 || lado2<0 || lado3<0){
            return "Error: Uno o mas lados son negativos"
        }
        if(trainguloValido(lado1,lado2,lado3)){
            if(type){
                return "Area: " + calcularAreaTriangulo(lado1,lado2,lado3) + "cm2";
            } else{
                return "Perimetro: " + calcularPerimetroTriangulo(lado1,lado2,lado3) +"cm";
            }
        } 
        return "Error: El triangulo no es valido";
        
    }
    return "Error: Ingrese todos los lados";
}


function trainguloValido(lado1,lado2,lado3){
    if((lado1+lado2>lado3)&&(lado1+lado3>lado2)&&(lado2+lado3>lado1)){
        return true
    }
    return false
}

export default triangulo