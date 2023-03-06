import { question } from "readline-sync";

//35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:número = 9534 ; soma = 9+5+3+4 = 21.

//entrada
const n = Number(question('Número de 4 dígitos: '))

//processamento 4567
const m = Math.floor(n / 1000) //4
const resto = n - (m*1000) // 4567 - 4000 = 567
const c = Math.floor(resto/100) // 567/100 = 5
const resto2 = resto - (c*100) // 567 - 500
const d = Math.floor(resto2/10) // 67/10 = 6
const u = resto2 % 10 // 7

const soma = m + c + d + u

//saída
console.log('Somatório dos elemetos:',soma)