import calcFib from "../Calculos/CalculoFibonacci";

test("Calcular la secuencia de los primeros 20 numeros fibonacci", () => {
    expect(
        calcFib(20)
    ).toBe("1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181")
})

test("Si pido el primer numero fibonacci me debe devolver 1",()=>{
    expect(
        calcFib(1)
    ).toBe("1")
})