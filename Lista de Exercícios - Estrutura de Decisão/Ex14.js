const prompt = require('prompt-sync')()

var diaFinal = Number(prompt('Digite o dia atual: '))
var mesFinal = Number(prompt('Digite o mês final: '))

var diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30 ,31, 30, 31]
var diasNoAno = 0

if(diaFinal >= 32 || diaFinal <= 0 || mesFinal <= 0 || mesFinal >= 13){
    console.log('Impossível realizar o calculo. Dia e/ou meses invalidos')
}
else{
    for (let i = 0; i < mesFinal; i++){
        diasNoAno += diasNoMes[i]
    }
    console.log(`A quantidade de dias que se passaram desde o começo do ano equivale a ${diasNoAno + diaFinal} dias`)
}