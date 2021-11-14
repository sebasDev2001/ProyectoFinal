

export default function calcFib(numero){
    var i;
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for(i=2;i<=numero;i++){
        fib[i] = fib[i-2] + fib[i-1];
        if(i==numero-1){
            return fib[i];
        }
    }
    
}
