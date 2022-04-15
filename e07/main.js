/*Declaração de Variavel*/
var raio;
var volume;

/* Declaração da mensagem para o usuario responder */
raio = parseFloat(prompt("Digite o raio: "));

/*Calculo */
volume = raio * raio * 3.14;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("O volume é de: " + volume);