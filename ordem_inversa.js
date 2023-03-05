import { question } from "readline-sync";

//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

//Entrada
const numA = Number(question('Número 1:'))
const numB = Number(question('Número 2:'))

//Processamento
const numero1 = numB
const numero2 = numA

//Saída
console.log('Ordem inversa: (',numero1,',',numero2,')')
