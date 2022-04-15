/*Declaração de Variavel*/
var hrentrada; 
var minuentrada;
var hrsaida; 
var minusaida; 
var valorhr;
var horatt; 
var valorminuto; 
var minutott; 
var pagamento;

/* Declaração da mensagem para o usuario responder */
hrentrada = parseFloat(prompt("Digite a Hora de entrada: "));
minuentrada = parseFloat(prompt("Digite o minuto de entrada: "));
hrsaida = parseFloat(prompt("Digite a Hora de saída: "));
minusaida = parseFloat(prompt("Digite o minuto de saida: "));

/*Calculo */
valorhr = hrsaida - hrentrada;
horatt = valorhr * 4.00;
valorminuto = minusaida - minuentrada;
minutott = valorminuto * 0.066;
pagamento = horatt + minutott;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("O valor a ser pago é de: "+ pagamento);