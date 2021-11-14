import { calcularAreaRectangulo, calcularPerimetroRectangulo } from "../Calculos/CalculoRectangulo";

test("Calcular el area de un reactangulo con lado 20cm y ancho 30.2", () =>{
    expect(
        calcularAreaRectangulo(20,30.2)
    ).toBe(604)
})

test("Calcular el perimetro de un rectangulo con ancho de 30cm y alto de 10.5",() =>{
    expect(
        calcularPerimetroRectangulo(30,10.5)
    ).toBe(81)
})