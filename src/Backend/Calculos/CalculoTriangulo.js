


function calcularAreaTriangulo(lado1,lado2,lado3){
    var semiperimeter = (lado1+lado2+lado3)/2 
    return Math.sqrt(semiperimeter*(semiperimeter-lado1)*(semiperimeter-lado2)*(semiperimeter-lado3)) 
    
}

function calcularPerimetroTriangulo(lado1,lado2,lado3) {
   return lado1+lado2+lado3
}

export {calcularAreaTriangulo, calcularPerimetroTriangulo}