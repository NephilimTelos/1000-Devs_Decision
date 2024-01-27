var conta = Number(parseFloat(prompt('Infome o valor total da conta em R$: ')))
var centavos = Number(parseFloat(conta - (parseInt(conta))).toFixed(2))
console.log(centavos)

if(centavos <= 0.30){
    let ptCarlosAndre = parseInt(conta) / 3
    let ptFelipe = ptCarlosAndre + Number(centavos)
    
    console.log(`Carlos pagará: R$:${ptCarlosAndre}`)
    console.log(`André pagará: R$:${ptCarlosAndre}`)
    console.log(`Felipe pagará: R$:${ptFelipe}`)
}

else{
    let ptCarlosAndre = conta / 3
    let ptFelipe = conta / 3
    
    console.log(`Carlos pagará: R$:${ptCarlosAndre}`)
    console.log(`André pagará: R$:${ptCarlosAndre}`)
    console.log(`Felipe pagará: R$:${ptFelipe}`)
}