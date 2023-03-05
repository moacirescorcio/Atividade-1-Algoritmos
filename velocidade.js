import { question } from "readline-sync";

//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

//Entrada de dados
const velocidade = question('Velocidade: ')

//Processamento
const Vkm = velocidade * 3.6

//Saída:
console.log('A velocidade em Km é de', Vkm)