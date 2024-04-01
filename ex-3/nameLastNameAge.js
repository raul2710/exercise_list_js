// Crie um programa que solicite o nome, sobrenome e idade do usuário e exiba essas informações formatadas em uma única frase.

var name = prompt("Insira seu nome: ");
var lastName = prompt("Insira seu sobrenome: ");
var age = prompt("Agora insira sua idade: ");

alert(
    `\tSeu nome é: ${name} \n
    \tSeu sobrenome é: ${lastName}\n
    \tSua idade: ${age}`
)