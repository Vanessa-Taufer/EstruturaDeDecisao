let nota1 = parseFloat(prompt("Digite a primeira nota : "));
let nota2 = parseFloat(prompt("Digite a segunda nota : "));

let media = (nota1 + nota2)/2;

console.log(media);


if (media >= 7) {
    console.log("Aluno APROVADO");
} else {
    console.log("Aluno REPROVADO");
}
