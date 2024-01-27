const prompt = require('prompt-sync')()

var lataUser = Number(prompt('Informe a quantidade de latas de 350ml a comprar: '))
var garrafinhaUser = Number(prompt('Informe a quantidade de garrafas de 600ml a comprar: '))
var garrafaUser = Number(prompt('Informe a quantidade de garrafas de 2l a comprar: '))

var totalLitros = (lataUser * 0.350) + (garrafinhaUser * 0.600) + (garrafaUser * 2)
var qtdEquivalente = Math.round((lataUser * 0.350) / 0.600)

//console.log(`\nA quantidade total de litros é de ${totalLitros}`)

if((garrafinhaUser * 0.09) >= (lataUser * 0.15)){
console.log(`\nA quantidade total de litros é de ${totalLitros}`)
console.log(`\nConsidere substituir a compra de: \n
${lataUser} latas de 350ml por ${qtdEquivalente} garrafas de 600ml \n`)
}
else {
    console.log(`\nA quantidade total de litros é de ${totalLitros}`)
}