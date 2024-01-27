var num1 = Number(prompt("Digite o primeiro número inteiro: "))
var num2 = Number(prompt("Digite o segundo número inteiro: "))
var conta

if((Number.isInteger(num1) && num1 > 0) && (Number.isInteger(num2) && num2 > 0))
{
    if(num1 > num2){
        conta = num1 / num2
        console.log(`A divisão de ${num1} por ${num2} é ${conta}`)
    }
    
    else if(num2 > num1){
        conta = num2 / num1
        console.log(`A divisão de ${num2} por ${num1} é ${conta}`)
    }
    
    else if(num2 == num1){
        conta = num1 / num2
        console.log(`A divisão de ${num1} por ${num2} é ${conta}`)
    }
}

else if(num1 == 0 || num2 == 0){
        console.log('Não foi possível completar a operação')
}

else{
    console.log('Número inserido inválido')
}