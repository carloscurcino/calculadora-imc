function calc() {
    let nome = document.querySelector("input#nome1").value
    let peso = document.querySelector("input#peso1").value
    let altura = document.querySelector("input#altura1").value
    let res = document.querySelector('div#res')
    
    if (altura <= 0 || peso <= 0 ) {
        window.alert('Apenas números positivos')
    }  else if(nome.length === 0 || peso.length === 0 || altura.length === 0){
        window.alert('[ERRO]Está faltando dados!')
    }else {
        window.alert('Calculando...')
        let imc = Number(peso)/Number(altura)**2
        let media = '' 
        if (imc < 18.50) {
            media = 'Abaixo do peso'
        } else if (imc >= 18.50 && imc < 24.99) {
            media = 'com Peso normal'
        } else if (imc >= 25.00 && imc < 29.99) {
            media = 'com Sobrepeso'
        } else if (imc >= 30.00 && imc < 34.99) {
            media = 'com Obesidade grau I'
        } else if (imc >= 35.00 && imc < 39.99) {
            media = 'com Obesidade grau II'
        } else if (imc >= 40.00) {
            media = 'com Obesidade Morbida'
        }
        res.innerHTML = `Olá, ${nome}! seu IMC é ${imc.toFixed(2)} e está ${media}.`
        } 
        
  
}