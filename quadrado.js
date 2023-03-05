import { question } from "readline-sync";

//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

//Entrada
const l = Number(question('Lado do quadrado: '))

//processamento
const a = l ** 2

//saída
console.log('Área do quadrado:', a)