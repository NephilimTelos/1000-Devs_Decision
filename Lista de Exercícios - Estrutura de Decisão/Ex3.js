var mediaPassar = 6
var aulasTotais = 270
var porcentagemPresencaPassar = 0.7

var nome = prompt('Insira o nome completo do aluno: ')
var aulasAtendidas = Number(prompt('Insira o número de aulas em que esteve presente: '))


var nota1 = Number(prompt('Insira a média do primeiro trimestre: '))
var nota2 = Number(prompt('Insira a média do segundo trimestre: '))
var nota3 = Number(prompt('Insira a média do terceiro trimestre: '))

var mediaAnual = ((nota1 + (nota2 * 2) + (nota3 * 3)) / 6).toFixed(2)
var porcentagemAulasPresentes = aulasAtendidas / (aulasTotais / 100)

if(mediaAnual >= mediaPassar && aulasAtendidas >= (aulasTotais * porcentagemPresencaPassar)){
    console.log(`O aluno ${nome} está APROVADO`)
    console.log(`A média final do aluno foi ${mediaAnual} com um aproveitamento de aulas de ${porcentagemAulasPresentes.toFixed(2)}%`)
}
else{
    console.log(`O aluno ${nome} está REPROVADO`)
    console.log(`A média final do aluno foi ${mediaAnual} com um aproveitamento de aulas de ${porcentagemAulasPresentes.toFixed(2)}%`)
}

/*if(nota1 == nota2 * 2 == nota3 * 3){
    console.log(`As 3 notas trimestrais com seus respectivos pesos foram iguais`)
}

else if(nota1 > nota2 * 2 + nota3 * 3){
    console.log(`A nota 1 (${nota1}) é a maior nota após cálculo do peso 1 (${nota1})`)
}

else if(nota2 * 2 > nota1 + nota3 * 3){
    console.log(`A nota 2 (${nota2}) é a maior nota após cálculo do peso 2 (${nota2 * 2})`)
}

else if(nota3 * 3 > nota1 + nota2 * 2){
    console.log(`A nota 3 (${nota3}) é a maior nota após cálculo do peso 3 (${nota3 * 3})`)
}

else if(nota1 == nota2 * 2 < nota3 * 3){
    console.log(`As notas 1 e 2 (${nota1} e ${nota2}) são as maiores notas após calculo de peso 1 (${nota1}) e peso 2 (${nota2 * 2})`)
}

else if(nota1 == nota3 * 3 < nota2 * 2){
    console.log(`As notas 1 e 3 (${nota1} e ${nota3}) são as maiores notas após calculo de peso 1 (${nota1}) e peso 3 (${nota3 * 3})`)
}

else if(nota2 * 2 == nota3 * 3 < nota1){
    console.log(`As notas 2 e 3 (${nota2} e ${nota3}) são as maiores notas após calculo de peso 1 (${nota2 * 2}) e peso 3 (${nota3 * 3})`)
}*/