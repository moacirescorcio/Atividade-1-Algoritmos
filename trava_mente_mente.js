import { question } from "readline-sync";

//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

//Entrada
const num1 = Number(question('Número 1:'))
const num2= Number(question('Número 2:'))

//Processamento
const soma = num1 + num2
const dif = num1 - num2
const resultado = soma / dif

//Saída
console.log('Resultado:', resultado)