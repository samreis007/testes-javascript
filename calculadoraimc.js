
class calculadoraimc{
    
    calcular(peso,altura){
        const imc = peso/(altura*altura)
        if(imc <=19){
            return"Magreza"
        }
        else if(imc >=19 && imc < 24){
            return "Normal"
        }
        else if(imc >=24 && imc < 29){
            return "Sobrepeso"
        }
        else{
            return "Obesidade"
        }
        
       
        
    }

}
module.exports = calculadoraimc