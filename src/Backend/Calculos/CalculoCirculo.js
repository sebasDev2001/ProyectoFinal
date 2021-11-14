

function calcularAreaCirculo(radio){
    return parseFloat((Math.PI * Math.pow(radio,2)).toFixed(5))
}

function calcularPerimetroCirculo(radio){
    return parseFloat((2*Math.PI*radio).toFixed(5))
}


export {calcularAreaCirculo,calcularPerimetroCirculo}