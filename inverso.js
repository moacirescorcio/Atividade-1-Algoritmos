import { question } from "readline-sync";

//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

//Entrada
const numero = Number(question('Número:'))

//Processamento
const c = Math.floor(numero / 100)
const d = Math.floor((numero%100)/10)
const u = numero%10


//Saída
console.log('Inverso:',u,d,c)