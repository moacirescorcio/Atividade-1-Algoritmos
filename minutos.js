import { question } from "readline-sync";

//03.Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

//Entrada de dados
const minutos = Number(question('Minutos:'))

//Processamento
const resultado = minutos / 60
const resto = minutos % 60

// Saída
console.log('O resultado é de', Math.floor(resultado),'h e', resto, 'minutos')