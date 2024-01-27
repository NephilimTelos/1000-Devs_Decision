const prompt = require('prompt-sync')()

var litrosUser = Number(prompt('Informe quantos litros de refresco deseja: '))
var pctAgua = Number(prompt('Digite o percentual (%) de concentração de água:  '))
var pctSuco = Number(prompt('Digite o percentual (%) de concentração de suco: '))

if(pctAgua + pctSuco == 100){
    let ltsAgua = (pctAgua / 100) * litrosUser
    let ltsSuco = (pctSuco / 100) * litrosUser

    console.log(`Serão necessários para se produzir ${litrosUser} de suco de maracujá:`)
    console.log(`${ltsAgua} litros de água`)
    console.log(`${ltsSuco} litros de suco concentrado de maracujá`)
}

else if(pctAgua + pctSuco != 100){
console.log('Os valores de concentração não totalizam 100%')
let yN = String(prompt('Deseja enquadrar os valores em escala de 100% (s | n)?: '))

    if(yN == 's'){
        let novoPctAgua = pctAgua / (pctAgua + pctSuco)
        let novoPctSuco = pctSuco / (pctAgua + pctSuco)
        let novoltsAgua = novoPctAgua * litrosUser
        let novoltsSuco = novoPctSuco * litrosUser

        console.log(`Novo percentual do Suco: ${Math.round(novoPctSuco * 100)}%`)
        console.log(`Novo percentual da água: ${Math.round(novoPctAgua * 100)}%`)

        console.log(`Serão necessários para se produzir ${litrosUser} de suco de maracujá:`)
        console.log(`${Math.round(novoltsAgua)} litros de água`)
        console.log(`${Math.round(novoltsSuco)} litros de suco concentrado de maracujá`)
    }
    else{
        console.log('Valores de concentração incorretos. Processo finalizado!')
    }
}