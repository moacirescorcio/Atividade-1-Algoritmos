import { question } from "readline-sync";

//28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

//entrada
const h = Number(question('Quantas horas? '))

//processamento 4000
const semanas = h / 168 //23.8
const resto = h % 168
const dias = resto / 24
const horas = resto % 24

//saída
console.log('Corresponde a', Math.floor(semanas),'semanas', Math.floor(dias),'dias e', Math.floor(horas), 'horas.')
