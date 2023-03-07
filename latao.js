import { question } from "readline-sync";

//44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

//entrada
const qtd_latao = Number(question('Quantidade de latão em kg: '))

//processamento
const cobre = qtd_latao * 0.7
const zinco = qtd_latao * 0.3

//saída
console.log('Quantidade de cobre é de', cobre,'kg')
console.log('Quantidade de zinco é de', zinco,'kg')