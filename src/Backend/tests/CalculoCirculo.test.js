import {calcularAreaCirculo, calcularPerimetroCirculo} from '../Calculos/CalculoCirculo'

test('Calcular el area de manera correcta dado un radio de 10cm', () => {
    expect(
        calcularAreaCirculo(10)
    ).toBe(314.15927)

})

test('Calcular el perimetro de un circulo de manera correcta con el valor de 10 ', ()=>{
    expect(
        calcularPerimetroCirculo(10)
    ).toBe(62.83185)
})