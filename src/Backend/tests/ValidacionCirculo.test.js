import circulo from "../Validacion/ValidacionCirculo";

test("Devuelve mensaje de error si no se introduce numero o es 0",()=>{
    expect(
        circulo(null,0)
    ).toBe("Error: No dijitaste el radio o el radio es 0")
})

test("Devuelve mesanje de error si el radio dijitado es negativo",()=> {
    expect(
        circulo(-2,0)
    ).toBe("Error: El radio dijitado es negativo o 0")
})

