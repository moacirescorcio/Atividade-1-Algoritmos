import { question } from "readline-sync";

//37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

//entrada
const dias = Number(question('Quantos dias? '))

//processamento
const anos = Math.floor(dias / 365)
const resto = dias % 365
const meses = Math.floor(resto / 12)
const d = resto % 12

//saída
console.log('Corresponde a', anos,'anos', meses,'meses e', d,'dias.' )
