import calcFacRec from "../Calculos/CalculoFactorial";

test('Calcular factorial 10!',()=>{
    expect(
        calcFacRec(10)
    ).toBe(3628800)
})

test('Calcular factorial de numero grande(69!)', ()=>{
    expect(
        calcFacRec(69)
    ).toBe(1.711224524281413e+98)
})