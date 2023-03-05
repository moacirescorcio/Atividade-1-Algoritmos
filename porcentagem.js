import { question } from "readline-sync";

//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const porcentagem = valor * 0.7

//Saída
console.log('70% do valor corresponde a R$', porcentagem)