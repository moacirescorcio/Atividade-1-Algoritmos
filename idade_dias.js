import { question } from "readline-sync";

//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

//entrada
const anos = Number(question('Anos: '))
const meses = Number(question('meses: '))
const dias = Number(question('dias: '))

//processamento
const n1 = anos * 365
const n2 = meses * 30
const soma = n1 + n2 + dias

//saída
console.log('Corresponde a', soma,'dias.')