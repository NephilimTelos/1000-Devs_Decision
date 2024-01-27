var cavalo = Number(parseInt(prompt('Informe a quantidade de cavalos: ')))
var val_ferradura = Number(parseFloat(prompt('Informe o valor de cada ferradura em R$: ')))
var ferradurasNecessarias = cavalo * 4
var valorCompra = ferradurasNecessarias * val_ferradura

console.log(`A quantidade de ferraduras necessárias é ${ferradurasNecessarias}`)

if(valorCompra >= 15000.01 && valorCompra <= 20000.00){
    valorCompra = valorCompra * 0.9
    console.log(`O valor total para a compra de ferraduras com um desconto de 10% fica R$${valorCompra.toFixed(2)}`)
}

else if(valorCompra >= 20000.01 && valorCompra <= 25000.00){
    valorCompra = valorCompra * 0.88
    console.log(`O valor total para a compra de ferraduras com um desconto de 12% fica R$${valorCompra.toFixed(2)}`)
}

else if(valorCompra >= 25000.01 && valorCompra <= 30000.00){
    valorCompra = valorCompra * 0.85
    console.log(`O valor total para a compra de ferraduras com um desconto de 15% fica R$${valorCompra.toFixed(2)}`)
}

else if(valorCompra >= 30000.01 && valorCompra <= Infinity){
    valorCompra = valorCompra * 0.80
    console.log(`O valor total para a compra de ferraduras com um desconto de 20% fica R$${valorCompra.toFixed(2)}`)
}

else{
    console.log(`O valor total para a compra de ferraduras sem descontos fica R$${valorCompra.toFixed(2)}`)
}