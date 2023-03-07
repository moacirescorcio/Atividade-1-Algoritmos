import { question } from "readline-sync";

//42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

//entrada
const  x1 = Number(question('Ponto x1: '))
const  y1 = Number(question('Ponto y1: '))
const x2 = Number(question('Ponto x2: '))
const y2 = Number(question('Ponto y2: '))

//processamenot
const d = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

//saída
console.log('O resultado da expressão é', d.toFixed(2))
