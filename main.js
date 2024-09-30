alert("Hello World!");

let a = 5;
let b = 10;
alert(`A soma é: ${a + b}`);

let valor1 = 20;
if (typeof valor1 === "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}

let valor2 = "Olá";
if (typeof valor2 === "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

let valor3 = true;
if (typeof valor3 === "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

let c = 15;
let d = 5;
alert(`A subtração é: ${c - d}`);

let e = 4;
let f = 5;
alert(`A multiplicação é: ${e * f}`);

let g = 20;
let h = 4;
alert(`A divisão é: ${g / h}`);

let numeroPar = 10;
if (numeroPar % 2 === 0) {
  alert("É um número par");
} else {
  alert("Não é um número par");
}

let numeroImpar = 11;
if (numeroImpar % 2 !== 0) {
  alert("É um número ímpar");
} else {
  alert("Não é um número ímpar");
}
