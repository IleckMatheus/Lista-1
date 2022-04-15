/*Declaração de Variavel*/
var ano_atual;
var ano_nasci;
var idade;

/* Declaração da mensagem para o usuario responder */
ano_atual = parseInt(prompt("Digite o ano atual: "));
ano_nasci = parseInt(prompt("Digite o ano de nascimento: "));

/*Calculo */
idade = ano_atual - ano_nasci;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("A idade da pessoa é de: "+idade);