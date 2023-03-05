import { question } from "readline-sync";

//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

//Entrada
const temp_f = Number(question('Temperatura em F: '))

//processamento
const temp_c = ((5*temp_f)-160)/9

//saída
console.log('Temperatura em C:', temp_c.toFixed(1))