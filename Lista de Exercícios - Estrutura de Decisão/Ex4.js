var num = Number(prompt('Informe o número para o cálculo da tabuada: '))

if(Number.isNaN(num) == false)
{
    
let op = String(prompt('Informe a operação desejada (+, -, *, /): '))

if(op == '*'){
   console.log('Tabuada da multiplicação para o número', num)
   console.log(num, '* 0 = ', (num * 0))
   console.log(num, '* 1 = ', (num * 1))
   console.log(num, '* 2 = ', (num * 2))
   console.log(num, '* 3 = ', (num * 3))
   console.log(num, '* 4 = ', (num * 4))
   console.log(num, '* 5 = ', (num * 5))
   console.log(num, '* 6 = ', (num * 6))
   console.log(num, '* 7 = ', (num * 7))
   console.log(num, '* 8 = ', (num * 8))
   console.log(num, '* 9 = ', (num * 9))
}

else if(op == '+'){
   console.log('Tabuada da soma para o número', num)
   console.log(num, '+ 0 = ', (num + 0))
   console.log(num, '+ 1 = ', (num + 1))
   console.log(num, '+ 2 = ', (num + 2))
   console.log(num, '+ 3 = ', (num + 3))
   console.log(num, '+ 4 = ', (num + 4))
   console.log(num, '+ 5 = ', (num + 5))
   console.log(num, '+ 6 = ', (num + 6))
   console.log(num, '+ 7 = ', (num + 7))
   console.log(num, '+ 8 = ', (num + 8))
   console.log(num, '+ 9 = ', (num + 9)) 
}

else if(op == '-'){
   console.log('Tabuada da subtração para o número', num)
   console.log(num, '- 0 = ', Math.abs(num - 0))
   console.log(num, '- 1 = ', Math.abs(num - 1))
   console.log(num, '- 2 = ', Math.abs(num - 2))
   console.log(num, '- 3 = ', Math.abs(num - 3))
   console.log(num, '- 4 = ', Math.abs(num - 4))
   console.log(num, '- 5 = ', Math.abs(num - 5))
   console.log(num, '- 6 = ', Math.abs(num - 6))
   console.log(num, '- 7 = ', Math.abs(num - 7))
   console.log(num, '- 8 = ', Math.abs(num - 8))
   console.log(num, '- 9 = ', Math.abs(num - 9)) 
}

else if(op == '/'){
   console.log('Tabuada da divisão para o número', num)
   console.log('Não existe divisão por 0')
   console.log(num, '/ 1 = ', (num / 1))
   console.log(num, '/ 2 = ', (num / 2))
   console.log(num, '/ 3 = ', (num / 3))
   console.log(num, '/ 4 = ', (num / 4))
   console.log(num, '/ 5 = ', (num / 5))
   console.log(num, '/ 6 = ', (num / 6))
   console.log(num, '/ 7 = ', (num / 7))
   console.log(num, '/ 8 = ', (num / 8))
   console.log(num, '/ 9 = ', (num / 9)) 
}

else{
    console.log('Operação inválida! Digite uma das 4 sugeridas')
}
}
else{
    console.log('Número inválido!')
}