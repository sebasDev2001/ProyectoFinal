import factorial from "../Validacion/ValidacionFactorial";

test("Devuelve mensaje de error si se introduce un numero decimal",()=>{
    expect(
        factorial(5.2)
    ).toBe("Error: Se ingreso un numero decimal")
})

test("Devuelve mensaje de error si no se introduce numero",()=>{
    expect(
        factorial(null)
    ).toBe("Error: No se ingreso numero")
})
