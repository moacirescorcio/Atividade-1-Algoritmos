import { question } from "readline-sync";

//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

//entrada
const seg = Number(question('Quantos segundos? '))

//processamento
const horas = seg / 3600
const resto = seg % 3600
const minutos = resto / 60
const segundos = resto % 60


//Saída
console.log('Corresponde a', Math.floor(horas),'h',Math.floor(minutos),'m e', Math.floor(segundos),'segundos')
