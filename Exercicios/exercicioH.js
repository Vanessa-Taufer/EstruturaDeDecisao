salario = 1200

vendas = parseFloat(prompt("Insira o total em vendas: "))

if (vendas>2000) {
    salarioFinal = salario+(vendas*0.1)
} else {
    salarioFinal=salario
}

console.log("O valor recebido pelo funcionario foi de "+ salarioFinal)