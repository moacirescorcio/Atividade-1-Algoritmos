import { question } from "readline-sync";

//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

//entrada
const temp_c = Number(question('Temperatura em C: '))

//processamento
const temp_f = ((9*temp_c) + 160)/5

//saída
console.log('Temperatura em F é de ', temp_f.toFixed(2))