import { question } from "readline-sync";

//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

//Entrada
const nota1 = Number(question('Nota 1: '))
const nota2 = Number(question('Nota 2: '))
const nota3 = Number(question('Nota 3: '))

const peso1 = Number(question('Peso 1: '))
const peso2 = Number(question('Peso 2: '))
const peso3 = Number(question('Peso 3: '))

//Processamento
const r = (nota1*peso1)+(nota2*peso2)+(nota3*peso3) / (peso1+peso2+peso3)

//Saída
console.log('Média ponderada é de', r.toFixed(1))

