// Faça um programa que simule um jogo de cara ou coroa, onde o usuário tenta adivinhar o resultado.
var coinValues = ["cara", "coroa"];

var randomNumber = parseInt(Math.random()*2);
var randomChoice = randomNumber === 2 ? 1 : randomNumber;

console.log(randomChoice);
var coinRandomChoice = coinValues[randomChoice];

var userChoice = prompt("Ecolha entre cara ou coroa: ");

result = coinRandomChoice == userChoice ? `Parabéns caiu ${coinRandomChoice}`: `Não foi dessa vez, caiu ${coinRandomChoice}`;
alert(result);