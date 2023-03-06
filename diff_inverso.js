import { question } from "readline-sync";

//32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

//entrada
const n = Number(question('Número de 3 dígitos: '))

//processamento
const c = Math.floor(n / 100)
const d = Math.floor((n%100)/10)
const u = n%10
const inverso = u+''+d+''+c
const diff = n - inverso

//saída
console.log('Diferença:', diff)

