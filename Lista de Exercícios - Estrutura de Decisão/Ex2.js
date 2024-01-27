var salarioMinimo = Number(prompt('Informe o salário mínimo atual em R$: '))

var salarioFuncionario = Number(prompt('Informe o seu salário em R$: '))

var qtdeSalariosMinimos = salarioFuncionario / salarioMinimo

if(qtdeSalariosMinimos < 1){
    console.log('Você ganha menos que um salário mínimo. KKKKKK pobre')
}
else{
    console.log('Você ganha o equivalente a', qtdeSalariosMinimos.toFixed(2), 'salários mínimos!')
}