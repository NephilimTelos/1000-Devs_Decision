const prompt = require('prompt-sync')()

var salarioFuncionario = Number(parseFloat(prompt('Informe o valor do seu salário atual em R$: ')))

var salarioAumentado = salarioFuncionario + (salarioFuncionario * 0.05)
var INSS = salarioAumentado - (salarioAumentado * 0.89)
var FGTS = salarioAumentado - (salarioAumentado * 0.92)

console.log(``)

console.log(`O seu salário aumentado em 5% ficará com o valor de R$${salarioAumentado}`)


if(salarioAumentado >= 1903.99 && salarioAumentado <= 2826.65){
    let IR = salarioAumentado - (salarioAumentado * 0.925)
    let descontos = INSS + FGTS + IR
    console.log(`O valor do INSS a ser descontado do salário aumentado é de R$${INSS}`)
    console.log(`O valor do FGTS a ser descontado do salário aumentado é de R$${FGTS}`)
    console.log(`O desconto de IR sobre seu salário aumentado será de 7,5%, que equivale a R$${IR}`)
    console.log(`A soma de todos os descontos equivale a R$${descontos}`)
    console.log(`Seu salário final é R$${salarioAumentado - descontos}`)

}

else if(salarioAumentado >= 2826.66 && salarioAumentado <= 3751.05){
    let IR = salarioAumentado - (salarioAumentado * 0.85)
    let descontos = INSS + FGTS + IR
    console.log(`O valor do INSS a ser descontado do salário aumentado é de R$${INSS}`)
    console.log(`O valor do FGTS a ser descontado do salário aumentado é de R$${FGTS}`)
    console.log(`O desconto de IR sobre seu salário aumentado será de 15%, que equivale a R$${IR}`)
    console.log(`A soma de todos os descontos equivale a R$${descontos}`)
    console.log(`Seu salário final é R$${salarioAumentado - descontos}`)

}

else if(salarioAumentado >= 3751.06 && salarioAumentado <= 4664.68){
    let IR = salarioAumentado - (salarioAumentado * 0.775)
    let descontos = INSS + FGTS + IR
    console.log(`O valor do INSS a ser descontado do salário aumentado é de R$${INSS}`)
    console.log(`O valor do FGTS a ser descontado do salário aumentado é de R$${FGTS}`)
    console.log(`O desconto de IR sobre seu salário aumentado será de 22,5%, que equivale a R$${IR}`)
    console.log(`A soma de todos os descontos equivale a R$${descontos}`)
    console.log(`Seu salário final é R$${salarioAumentado - descontos}`)

}

else if(salarioAumentado > 4664.68){
    let IR = salarioAumentado - (salarioAumentado * 0.725)
    let descontos = INSS + FGTS + IR
    console.log(`O valor do INSS a ser descontado do salário aumentado é de R$${INSS}`)
    console.log(`O valor do FGTS a ser descontado do salário aumentado é de R$${FGTS}`)
    console.log(`O desconto de IR sobre seu salário aumentado será de 27,5%, que equivale a R$${IR}`)
    console.log(`A soma de todos os descontos equivale a R$${descontos}`)
    console.log(`Seu salário final é R$${salarioAumentado - descontos}`)

}

else{
    console.log(`Seu salário final é R$${salarioAumentado}`)
}