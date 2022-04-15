/*Declaração de Variavel*/
var dolar;
var valor_real;
var valor_tt;

/* Declaração da mensagem para o usuario responder */
dolar = parseFloat(prompt("Quantos dolares o senhor tem: "));
valor_real = parseFloat(prompt("Valor atual do real: "));

/*Calculo */
valor_tt = dolar * valor_real;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("O valor é: "+valor_tt);