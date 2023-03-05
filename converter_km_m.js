import { question } from "readline-sync";

//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

//entrada
const m = Number(question('Valor em metros: '))

//processamento
const km = m / 1000
const resto = m % 1000

//saída
console.log('Corresponde a', Math.floor(km),'Km e', resto,'metros')