import { calcularAreaRectangulo,calcularPerimetroRectangulo } from "../Calculos/CalculoRectangulo";

export default function rectangulo(ancho, alto, type){
    if ((ancho && alto) && ancho!=0 && alto!=0){
        ancho = parseFloat(ancho,10)
        alto = parseFloat(alto, 10)
        if(ancho<0 || alto<0){
            return "Error: Se ingresaron lados negativos"
        }
        if(type==0){
            return "Area: " + calcularAreaRectangulo(ancho, alto) + "cm2";
        }else{
            return "Perimetro: " + calcularPerimetroRectangulo(ancho,alto)+ "cm";
        }
    }
    return "Error: No dijitaste los lados correctamente";
}
