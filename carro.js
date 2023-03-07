import { question } from "readline-sync";

//41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

//entrada
const cf = Number(question('Custo de fábrica: '))


//processamento
const custo_consumidor = cf + (cf * 0.28) + (0.25 * cf)

//saída
console.log('Custo ao consumidor é de R$', custo_consumidor.toFixed(2))

