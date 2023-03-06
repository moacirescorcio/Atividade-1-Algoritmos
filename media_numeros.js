import { question } from "readline-sync";

//34. Leia 3 números, calcule e escreva a média dos números.

//entrada
const n1 = Number(question('Número 1: '))
const n2 = Number(question('Número 2: '))
const n3 = Number(question('Número 3: '))

//processamento
const media = (n1+n2+n3)/3

//saída
console.log('Média dos números é de', media)