

export default function calcFib(numero){
    var i;
    var fib = [];
    var res = '1'
    fib[0] = 0;
    fib[1] = 1;
    if(numero==1){
        return res;
    }else{
        for(i=2;i<=numero;i++){
            fib[i] = fib[i-2] + fib[i-1];
            res += ","+fib[i].toString()
            if(i==numero-1){
                return res;
            }
        }
    }
}
