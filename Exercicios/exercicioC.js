tempo = parseInt(prompt("digite o seu tempo de empresa: "))
salario = parseFloat(prompt("Digite o seu salario: "))

if (tempo >= 5) {
    bonus = 0.2
} else {
    bonus = 0.1
}

console.log("O bonus no seu salario foi de "+ (bonus*salario) + " reais")