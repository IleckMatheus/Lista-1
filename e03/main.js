/*Declaração de Variavel*/
var preco;
var desconto;

/* Declaração da mensagem para o usuario responder */
preco = parseFloat(prompt("Digite o valor do produto: "));

/*Calculo */
desconto = preco * 5 /100;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("O valor com desconto é de: "+desconto);