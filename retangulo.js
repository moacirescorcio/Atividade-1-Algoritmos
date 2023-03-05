import { question } from "readline-sync";

//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

//Entrada
const base = Number(question('Base: '))
const altura = Number(question('Altura: '))

//Processamento
const a = base * altura

//Saída
console.log('Área do retângulo é de', a)