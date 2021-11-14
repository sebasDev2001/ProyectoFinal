

function calcularAreaRectangulo(ancho, alto){
    return parseFloat((ancho*alto).toFixed(2))
}

function calcularPerimetroRectangulo(ancho, alto){
    return parseFloat((2*alto + 2*ancho).toFixed(2))
}

export {calcularAreaRectangulo, calcularPerimetroRectangulo}