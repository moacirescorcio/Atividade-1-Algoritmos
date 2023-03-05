import { question } from "readline-sync";

//22. Leia um valor em km, calcule e escreva o equivalente em m.

//entrada
const valor_km = Number(question('Valor em Km: '))

//processamento
const valor_m = valor_km * 1000

//Saída
console.log('Valor em metros é de', valor_m)

