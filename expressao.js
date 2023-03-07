import { question } from "readline-sync";

//39.Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

//entrada
const a = Number(question('Número 1: '))
const b = Number(question('Número 2: '))
const c = Number(question('Número 3: '))

//processamento
const r = (a+b)**2
const s = (b+c)**2
const d = Math.floor((r+s)/2)

//saída
console.log('O resultado da expressão d=(r+s)/2 é igual a', d)