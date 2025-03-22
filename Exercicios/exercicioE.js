codigo = prompt("Digite o codigo do produto: ")

if (codigo = 1) {
    console.log("Alimento não-perecível")
} else if (codigo == "2" || codigo == "3" || codigo == "4") {
    console.log("Alimento perecível")
} else if (codigo == "5" || codigo == "6") {
    console.log("Vestuário")
} else if (codigo == "7") {
    console.log("Higiene Pessoal")
} else if (codigo == "8" || codigo == "9" || codigo == "10") {
    console.log("Utensílios Domésticos")
} else {
    console.log("Inválido")
}