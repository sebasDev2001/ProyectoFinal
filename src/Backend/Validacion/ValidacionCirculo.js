import { calcularAreaCirculo, calcularPerimetroCirculo } from '../Calculos/CalculoCirculo';

export default function circulo(radio,type){
    if (radio){
        radio = parseFloat(radio,10)
        if(radio>0){
            if(type==0){
                return "Area: " + calcularAreaCirculo(radio) + "cm2";
            } else {
                return "Circunferencia: " +calcularPerimetroCirculo(radio) + "cm";
            }
        }
        return "Error: El radio dijitado es negativo o 0"
    }
    return "Error: No dijitaste el radio o el radio es 0";
}