import { question } from "readline-sync";

//24. Leia um valor em m, calcule e escreva o equivalente em cm.

//entrada
const m = Number(question('Valor em metros: '))

//processamento
const cm = m * 100

//saída
console.log('Equivalente em centímetros:',cm)