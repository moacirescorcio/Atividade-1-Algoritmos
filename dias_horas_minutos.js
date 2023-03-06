import { question } from "readline-sync";

//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

//entrada
const m = Number(question('Quantos minutos? '))

//processamento 4000
const dias = m / 1440 // 2.77
const resto = m % 1440 // 
const horas = resto / 60 // 
const minutos = resto % 60

//saída
console.log('Corresponde a', Math.floor(dias),'dias', Math.floor(horas),'h e', minutos,'minutos.')