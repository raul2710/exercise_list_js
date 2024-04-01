// Declare uma variável para armazenar o preço de um produto e outra para armazenar a quantidade desse produto. Calcule o total e exiba na tela.

var price = prompt("Digite o valor do produto em reais: ");
var quantity = prompt("Digite a quantidade comprada: ");

var totalValue = price * quantity;

alert(`O valor total a ser pago é de R$${totalValue}`);