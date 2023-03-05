import { question } from "readline-sync";

//6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

//Entrada
const velocidade = Number(question('Velocidade em Km/h:'))

//Processamento
const vel_ms = velocidade / 3.6

//Saída
console.log('Velocidade em M/s:', vel_ms.toFixed(2))