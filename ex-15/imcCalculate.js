// Faça um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa com base no peso e altura fornecidos.

var height = prompt("Insira sua altura: ");
var weight = prompt("Insira seu peso: ");

var imc = weight/(height**2);

alert(`Seu IMC é de ${imc}`);