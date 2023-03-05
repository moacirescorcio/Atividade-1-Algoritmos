import { question } from "readline-sync";

//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

//entrada
const r = Number(question('Valor do raio: '))

//processamento
const vol = (4 * 3.14 * (r**3)) / 3

//saída
console.log('Volume da esfera é de', vol.toFixed(2))