const prompt = require('prompt-sync')()

var anoUser = Number(prompt('Informe seu ano de nascimento: '))
var mesUser = Number(prompt('Informe o número do seu mês de nascimento: '))
var anoAtual = Number(prompt('Informe o ano atual: '))
var mesAtual = Number(prompt('Informe o número do mês atual: '))

const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30 ,31, 30, 31]
var dias = Number(prompt('Informe o dia do mês atual: '))

var anos = anoAtual - anoUser
var meses = (mesAtual - mesUser) - 1
var mesesTotais = ((mesAtual - mesUser) - 1 ) + (12 * anos)
var diasAteOAno = 365 * anos
var diasNoAno = 0

for (let i = 0; i < mesAtual - 1; i++){
    diasNoAno += diasNoMes[i]
}

var diasTotais = diasNoAno + diasAteOAno + dias

if(anoAtual < anoUser || mesUser < 1 || mesUser > 12 || mesAtual < 1 || mesAtual > 12){
    throw new Error('Dados inválidos. Encerrando operação')
}

console.log(`Idade: ${anos} anos, ${meses} meses e ${dias} dias ou ${mesesTotais} meses ou ${diasTotais} dias`)