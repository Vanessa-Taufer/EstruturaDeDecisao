ladoA = parseFloat(prompt("Insira a medida do lado A: "));

ladoB = parseFloat(prompt("Insira a medida do lado B: "));

ladoC = parseFloat(prompt("Insira a medida do lado C: "));

if (ladoA == ladoB && ladoB == ladoC) {
    console.log("Triângulo Equilátero"); 
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("Triângulo Isósceles"); 
} else {
    console.log("Triângulo Escaleno");
}

