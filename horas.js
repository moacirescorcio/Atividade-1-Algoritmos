import { question } from "readline-sync";

//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

//Entrada
const horas = Number(question('Horas:'))
const minutos = Number(question('Minutos:'))

//Processamento
const resultado = (horas * 60) + minutos

//Saída
console.log('O resultado em minutos é de', resultado)