/*Declaração de Variavel*/
var larg_parede; 
var compri_parede;
var larg_tijolo; 
var compri_tijolo; 
var quantidade_tijolo; 
var total_parede; 
var total_tijolo;

/* Declaração da mensagem para o usuario responder */
larg_parede = parseFloat(prompt("Qual a Largura da Parede: "));
compri_parede = parseFloat(prompt("Qual o Comprimento da Parede: "));
larg_tijolo = parseFloat(prompt("Qual a Largura do Tijolo: "));
compri_tijolo = parseFloat(prompt("Qual o Comprimento do Tijolo: "));

/*Calculo */
total_tijolo = compri_tijolo * larg_tijolo;
total_parede = compri_parede * larg_parede;
quantidade_tijolo = total_parede / total_tijolo;

/* Mensagem de confirmação depois das resposta do usuario no prompt */
alert("A quantidade de Tijolos a serem usados: "+ quantidade_tijolo);