const Calculadoraimc = require('./calculadoraimc')

const imc = new Calculadoraimc()

it('Deve acusar o resultado "Magreza"', ()=>{
    expect(imc.calcular(55,1.80)).toBe("Magreza")
})
it('Deve acusar o resultado "Normal"', ()=>{
    expect(imc.calcular(75,1.80)).toBe("Normal")
})
it('Deve acusar o resultado "Sobrepeso"', ()=>{
    expect(imc.calcular(85,1.80)).toBe("Sobrepeso")
})
it('Deve acusar o resultado "Obesidade"', ()=>{
    expect(imc.calcular(100,1.80)).toBe("Obesidade")
})
