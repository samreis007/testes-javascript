// 1) importação da classe calculadora
const Calculadora = require('./calculadora')

//2) criar um objeto que herde
// a classe calculadora
const calc = new Calculadora()

// 3) escrita do teste do
// método soma,subtracao,multiplicacao e divisao
it('Deve somar dois números', ()=>{
    expect(calc.soma(10,10)).toBe(20)
})
it('Deve subtrair dois números', ()=>{
    expect(calc.subtracao(10,10)).toBe(0)
})
it('Deve multiplicar dois números', ()=>{
    expect(calc.multiplicacao(10,10)).toBe(100)
})
it('Deve dividir dois números', ()=>{
    expect(calc.divisao(10,0)).toBe(Infinity)
})