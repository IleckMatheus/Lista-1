/*Declaração de Variavel*/
var preco;
var desconto;
var precott;

/* Declaração da mensagem para o usuario responder */
preco = parseFloat(prompt("Digite o valor do produto: "));
desconto = parseFloat(prompt("Digite o valor do desconto: "));

/*Calculo */
precott = preco * desconto / 100;
precott = preco - precott;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("O valor total séra de:R$ " + precott);