const prompt = require('prompt-sync')()

var num = (Number(prompt('Insire um número inteiro até 4 dígitos: ')))

if(Number.isInteger(num) && num > 0){
    
    if(num.toString().length > 4){
    throw new Error('Número com mais de 4 dígitos! Encerrando operação...')
    }
    
}

else if(Number.isNaN(num)){
    throw new Error('Você não inseriu um valor numérico! Encerrando operação...')
}

else if(num < 0){
    throw new Error('Você não inseriu um valor positivo! Encerrando operação...')
}

var milhares = (num - num % 1000) / 1000
var centenas = ((num % 1000) - num % 100) / 100
var dezenas = ((num % 100) - num % 10) / 10
var unidades = num % 10

console.log(`\nMilhares: ${milhares}\n
Centenas: ${centenas}\n
Dezenas: ${dezenas}\n
Unidades: ${unidades}`)