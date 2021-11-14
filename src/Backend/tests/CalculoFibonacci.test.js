import calcFib from "../Calculos/CalculoFibonacci";

test("Calcular el 250 numero fibonacci", () => {
    expect(
        calcFib(250)
    ).toBe(4.880197746793e+51)
})