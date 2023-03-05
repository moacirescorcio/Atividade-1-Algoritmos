import { question } from "readline-sync";

//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

//Entrada
const kg = Number(question('Valor em Kg: '))


//processamento
const g = kg * 1000

//saída
console.log('O valor em grama é', g)
