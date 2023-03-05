import { question } from "readline-sync";

//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

//Entrada
const salario = Number(question('Salário atual:'))

//Processamento
const aumento = (salario * 0.25) + salario

//Saída
console.log('Salário com aumento: R$', aumento)
