var dMetrosFrente = Number(prompt('Informe quantos metros o terreno tem de frente: '))

var dMetrosLado = Number(prompt('Informe quantos metros o terreno tem na lateral: '))

var valorMetroQuadrado = Number(prompt('Informe o valor por metro quadrado em R$: '))

var areaTerreno = dMetrosFrente * dMetrosLado

var valorTerreno = areaTerreno * valorMetroQuadrado

if(dMetrosFrente - dMetrosLado < dMetrosFrente * 0.10){
    let novoValorTerreno = valorTerreno + (valorTerreno * 0.22)
    console.log(`A área total do terreno com ${dMetrosFrente} mts de frente e ${dMetrosLado} mts de lado é ${areaTerreno} mts²`)
    console.log(`O terreno recebeu um acréscimo de 22% e custará: R$${novoValorTerreno}`)
    
}

else if(dMetrosFrente < dMetrosLado * 0.40){
    let novoValorTerreno = valorTerreno - (valorTerreno * 0.12)
    console.log(`A área total do terreno com ${dMetrosFrente} mts de frente e ${dMetrosLado} mts de lado é ${areaTerreno} mts²`)
    console.log(`O terreno recebeu um desconto de 12% e custará: R$${novoValorTerreno}`)
}

else if(dMetrosFrente > dMetrosLado * 0.70){
    let novoValorTerreno = valorTerreno - (valorTerreno * 0.15)
    console.log(`A área total do terreno com ${dMetrosFrente} mts de frente e ${dMetrosLado} mts de lado é ${areaTerreno} mts²`)
    console.log(`O terreno recebeu um desconto de 15% e custará: R$${novoValorTerreno}`)
}

else{
    console.log(`A área total do terreno com ${dMetrosFrente} mts de frente e ${dMetrosLado} mts de lado é ${areaTerreno} mts²`)
    console.log(`O terreno não recebeu alterações e custará: R$${valorTerreno}`)
}