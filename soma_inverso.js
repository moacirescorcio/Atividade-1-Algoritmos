import { question } from 'readline-sync'

//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

//entrada
const n = Number(question('Número de 3 dígitos: '))

//processamento
const c = Math.floor(n / 100)
const d = Math.floor((n%100)/10)
const u = n%10
const inverso = u * 100 + d * 10 + c 
const soma = n + inverso

//saída
console.log('Soma com o inverso é de', soma)

