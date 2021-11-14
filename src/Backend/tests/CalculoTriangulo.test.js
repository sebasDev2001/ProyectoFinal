import { calcularAreaTriangulo, calcularPerimetroTriangulo } from "../Calculos/CalculoTriangulo";

test("Calcular area de triangulo con lados: 3,4,5",()=>{
    expect(
        calcularAreaTriangulo(3,4,5)
    ).toBe(6)
})

test("Calcular area de triangulo con lados: 3,4,5",()=>{
    expect(
        calcularPerimetroTriangulo(3,4,5)
    ).toBe(12)
})
