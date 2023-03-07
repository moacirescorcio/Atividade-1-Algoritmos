import { question } from "readline-sync";

//43. Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo. Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

//entrada
const a = Number(question('A= '))
const b = Number(question('B= '))
const c = Number(question('C= '))
const d = Number(question('D= '))
const e = Number(question('E= '))
const f = Number(question('F= '))

//processamento
const x = ((c*e) - (b*f)) / ((a*e)-(b*d))
const y = ((a*f)-(c*d)) / ((a*e)-(b*d))

//saída
console.log('O resultado das expressões é de', x.toFixed(2),'e', y.toFixed(2))


