/*Declaração de Variavel*/
var preco_desc;
var preco_ori;
var preco_descfinal;

/* Declaração da mensagem para o usuario responder */
preco_ori = parseFloat(prompt("Digite o valor do produto: "));
preco_desc = parseFloat(prompt("Digite o valor do desconto: "));

/*Calculo */
preco_desc = preco_ori * preco_desc / 100;
preco_descfinal = preco_ori - preco_desc;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("O valor com desconto é de: R$ "+ preco_desc+ "  e "+ "O valor final do produto foi de: "+ preco_descfinal); 

