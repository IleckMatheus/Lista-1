/*Declaração de Variavel*/
var larg;
var compr;
var areatt;
var perimetro;

/* Declaração da mensagem para o usuario responder */
larg = parseInt(prompt("Digite a Largura: "));
compr = parseInt(prompt("Digite o Comprimento: "));

/*Calculo */
areatt = larg * compr;
perimetro = larg * 4;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("A área total é de:  " + areatt + "  e " + " o perimetro é de:  "+perimetro);
