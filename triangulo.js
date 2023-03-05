import { question } from "readline-sync";

//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

//Entrada
const base = Number(question('Base: '))
const altura = Number(question('Altura: '))

//Processamento
const area = ((base*altura)/2)

//Saída
console.log('A área do triângulo é de', area)