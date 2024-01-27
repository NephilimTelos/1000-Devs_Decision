const prompt = require('prompt-sync')()

var frangos = Number(prompt('Informe a quantidade de frangos: '))
var chipID = Number(prompt('Informe quanto custa o chip ID em R$: '))
var chipAoMosso = Number(prompt('Informe quanto custa o chip de alimentação em R$: '))
console.log()

var valorAoMosso = (frangos * chipAoMosso) * 2
var valorID = frangos * chipID

if(chipID > chipAoMosso){

    let diferença = chipID - chipAoMosso
    let pctDif =  (diferença / chipID) * 100
    let add20 = valorAoMosso * 0.20
    console.log(`Diferença entre os chips equivale a R$${Math.abs(diferença).toFixed(2)}
    (equivale a ${Math.round(pctDif)}% do chip mais caro)\n`)

    if(diferença <= chipID * 0.20){   

        console.log(`A quantidade do chip de alimentação sofreu um aumento de 20%, de ${frangos * 2} para ${frangos * 2 + ((frangos * 0.20) * 2)} \t`)
            console.log(`O valor total para identificar os frangos é: \n
            Chip Alimentação: R$${valorAoMosso}
            Chip Identificação: R$${valorID} 
            Adicional de 20%: R$${add20}
            Valor Total: R$${valorAoMosso + valorID + add20}\n`)
    }
    else{
        console.log(`O valor total para identificar os frangos é: \n
            Chip Alimentação: R$${valorAoMosso}
            Chip Identificação: R$${valorID} 
            Valor Total: R$${valorAoMosso + valorID}\n`)
    }
}

else if(chipAoMosso > chipID){

        let diferença = chipAoMosso - chipID
        let pctDif =  (diferença / chipAoMosso) * 100
        let add20 = valorID * 0.20
        console.log(`Diferença entre os chips equivale a R$${Math.abs(diferença).toFixed(2)}
        (equivale a ${Math.round(pctDif)}% do chip mais caro)\n`)
    
        if(diferença <= chipAoMosso * 0.20){   
    
            console.log(`A quantidade do chip de identificação sofreu um aumento de 20%, de ${frangos} para ${frangos + (frangos * 0.20)} \t`)
            console.log(`O valor total para identificar os frangos é: \n
            Chip Alimentação: R$${valorAoMosso} 
            Chip Identificação: R$${valorID} 
            Adicional de 20%: R$${add20}
            Valor Total: R$${valorAoMosso + valorID + add20}\n`)
        }
        else{
            console.log(`O valor total para identificar os frangos é: \n
            Chip Alimentação: R$${valorAoMosso} \n
            Chip Identificação: R$${valorID} \n
            Valor Total: R$${valorAoMosso + valorID}`)
        }
}