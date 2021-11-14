import calcFib from "../Calculos/CalculoFibonacci";

export default function fibonacci(numero){
    if(numero){
        if(numero>=0){
            if(numero%1 ==0){
                return calcFib(numero);
            }
            return "Error: Se ingreso un numero decimal"
        }
        return "Error: se ingreso numero negativo"
    }
    return "Error: No se ingreso numero"
}