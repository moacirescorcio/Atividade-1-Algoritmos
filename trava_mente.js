import { question } from "readline-sync";

//7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

//Entrada
const num1 = Number(question('Número 1:'))
const num2 = Number(question('Número 2:'))
const num3 = Number(question('Número 3:'))

//Processamento
const soma = num1 + num2
const dif = num2 - num3

//Saída
console.log('Soma:', soma)
console.log('Diferença:', dif)
