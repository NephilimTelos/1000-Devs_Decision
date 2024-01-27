var peso = Number(parseFloat(prompt('Informe seu peso em Kgs: ')))

var peso15 = peso + (peso * 0.15)
var peso20 = peso + (peso * 0.20)

console.log(`Caso a pessoa engorde 15%, ela ficará com ${peso15} Kgs`)
console.log(`Caso a pessoa engorde 20%, ela ficará com ${peso20} Kgs`)

if(peso20 - peso15 >= 4.5){
    console.log('Você deve procurar uma nutricionista!')
}