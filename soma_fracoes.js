import { question } from "readline-sync";

//38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

//entrada
const numerador1 = Number(question('Numerador 1: '))
const denominador1 = Number(question('Denominador 1: '))
const numerador2 = Number(question('Numerador 2: '))
const denominador2 = Number(question('Denominador 2: '))

//processamento
const resultado_denominador = denominador1 * denominador2
const resultado_numerador1 = (resultado_denominador/denominador1) * numerador1
const resultado_numerador2 = (resultado_denominador/denominador2) * numerador2
const resultado_numerador = resultado_numerador1 + resultado_numerador2

//saída
console.log('Resultado da soma das frações é', resultado_numerador,'/', resultado_denominador)