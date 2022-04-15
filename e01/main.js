/*Declaração de Variavel*/
var largura;
var comprimento;
var area;

/* Declaração da mensagem para o usuario responder */
largura = parseFloat (prompt("Digite a Largura: "));
comprimento = parseFloat (prompt("Digite o Comprimento: "));

/*Calculo */
area = largura * comprimento;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("A area da sala é de: " + area);