import { question } from "readline-sync";

//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

//entrada
const r = Number(question('Raio: '))

//processamento
const area_circunferencia = 2 * 3.14 * r

//saída
console.log('Área da circunferencia é de', area_circunferencia.toFixed(2))