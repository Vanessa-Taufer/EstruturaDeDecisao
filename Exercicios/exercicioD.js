salario = parseFloat(prompt("Digite seu salario: "))
emprestimo = parseFloat(prompt("Digite o valor do emprestimo desejado: "))
parcelas = parseInt(prompt("Digite a quantidade de parcelas desejada: "))

valorParcela = emprestimo/parcelas

if (salario*0.3 >= valorParcela) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}