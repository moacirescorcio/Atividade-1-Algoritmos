import { question } from "readline-sync";

//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

//Entrada
const num1 = Number(question('Número 1:'))
const num2 = Number(question('Número 2:'))

//Processamento
const quociente = num1 / num2
const resto = num1 % num2

//Saída
console.log('Quociente:', Math.floor(quociente))
console.log('Resto:', resto)