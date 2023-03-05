import { question } from "readline-sync";

//4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

//Entrada
const valor_do_dolar = Number(question('Valor do dólar:'))
const dolar = Number(question('Dolar:'))

//Processamento
const real = dolar * valor_do_dolar

//Saída
console.log('O valor em real é de R$', real)

