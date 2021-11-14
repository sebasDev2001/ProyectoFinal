import rectangulo from "../Validacion/ValidacionRectangulo";

test("Muestra error si no se ingresa algunos o ninguno de los lados",()=>{
    expect(
        rectangulo(null,null,0)
    ).toBe("Error: No dijitaste los lados correctamente")
})

test("Muestra error si se ingresa alguno o todos los lados negativos",()=>{
    expect(
        rectangulo(-2,3,0)
    ).toBe("Error: Se ingresaron lados negativos")
})

