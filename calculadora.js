// 1) criar  a classe 'calculadora'
class calculadora{
    
    //2) criar o método
    // chamado 'soma'
    soma(n1,n2){
        return n1 + n2

    }

    subtracao(n1,n2){
        return n1 - n2

    }
    multiplicacao(n1,n2){
        return n1 * n2

    }
    divisao(n1,n2){
        if(n2 === 0){
            return Infinity
        }
        return n1 / n2

    }
}
// exportar a classe
// para outros arquivos
module.exports = calculadora
// calculando o número 10 por 0 
// para saber o resultado.
var n1 = 10
var n2 = 0
var div = n1/n2
console.log(div)