import { question } from "readline-sync";

//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

//entrada
const dias = Number(question('Dias: '))

//processamento
const semanas = dias / 7
const resto = dias % 7

//saída
console.log('Corresponde a', Math.floor(semanas),'semanas e', resto,'dias')