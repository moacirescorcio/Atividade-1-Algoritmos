import { question } from "readline-sync";

//5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

//Entrada
const numero = Number(question('Número:'))

//Processamento 458
const centena = numero / 100 //4.58
const dezena = Math.floor((numero % 100))/10 //5
const unidade = Math.floor(numero) % 10 //8

const resultado = Math.floor(centena)+Math.floor(dezena)+unidade

//Saída
console.log('Resultado:', resultado)