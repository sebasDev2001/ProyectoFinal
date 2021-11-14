import fibonacci from "../Validacion/ValidacionFibonacci";

test("Muestra error si no se ingresa numero",()=>{
    expect(
        fibonacci(null)
    ).toBe("Error: No se ingreso numero")
})

test("Muestra error si se ingresa un numero negativo",()=>{
    expect(
        fibonacci(-5)
    ).toBe("Error: se ingreso numero negativo")
})

test("Muestra error si se ingresa un numero decimal",()=>{
    expect(
        fibonacci(5.2)
    ).toBe("Error: Se ingreso un numero decimal")
})

