import triangulo from "../Validacion/ValidacionTriangulo";

test("Muestra error si no se ingresa uno o mas lados", ()=>{
    expect(
        triangulo(null,null,null,0)
    ).toBe("Error: Ingrese todos los lados")
})

test("Muestra error si se ingresa uno o mas lados negativos", ()=>{
    expect(
        triangulo(-3,-2,1,0)
    ).toBe("Error: Uno o mas lados son negativos")
})

test("Muestra error si el triangulo no es valido", ()=>{
    expect(
        triangulo(3,10,4,1)
    ).toBe("Error: El triangulo no es valido")
})