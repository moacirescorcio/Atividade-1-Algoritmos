import { question } from "readline-sync";

//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

//entrada
const m = Number(question('Quantos meses? '))

//processamento
const anos = m / 12
const meses = m % 12

//saída
console.log('Corresponde a', Math.floor(anos),'anos e', meses,'meses.')