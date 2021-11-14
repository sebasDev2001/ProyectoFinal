import calcFacRec from "../Calculos/CalculoFactorial";


function factorial(numero){
    if(numero){
        if(numero>=0){
            if(numero%1 ==0){
                return calcFacRec(numero);
            }
            return "Error: Se ingreso un numero decimal"
        }
        return "Error: No se pueden numeros negativos"
    }
    return "Error: No se ingreso numero"
}

export default factorial 