import { calcularAreaTriangulo, calcularPerimetroTriangulo } from "../Calculos/CalculoTriangulo";

test("Calcular area de rectangulo con lados: 3,4,5",()=>{
    expect(
        calcularAreaTriangulo(3,4,5)
    ).toBe(6)
})