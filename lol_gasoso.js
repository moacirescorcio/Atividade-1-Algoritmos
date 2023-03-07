import { question } from "readline-sync";

//40.Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

//entrada
const anos_fumando = Number(question('Anos fumando: '))
const n_cigarros_dia = Number(question('Número de cigarros por dia: '))
const preco_carteira = Number(question('Preço da carteira de cigarro: '))

//processamento
const valor_dia = (n_cigarros_dia*preco_carteira)/20
const valor_gasto = valor_dia*(365*anos_fumando)

//saída
console.log('Valor gasto nesses anos foi de R$', valor_gasto.toFixed(2))
