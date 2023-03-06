import { question } from "readline-sync";

//31.31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

//entrada
const n = Number(question('Número inteiro 4 dígitos binários: '))

//processamento
const n1 = Math.floor(n / 1000) // 1.111
const resto = n % 1000 // 111
const n2 = Math.floor(resto / 100) // 1.11
const resto2 = resto % 100 // 11
const n3 = Math.floor(resto2 / 10)// 1.1
const n4 = resto2 % 10//1

const soma = (n1*8)+(n2*4)+(n3*2)+(n4*1) 

//saída
console.log('Equivalo a', Math.floor(soma),'decimal.')
