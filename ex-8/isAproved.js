// Faça um programa que verifique se um aluno foi aprovado (nota maior ou igual a 7) ou reprovado (nota menor que 7).

var grade = prompt("Digite a nota do aluno: ");

var result = grade>=7 ? "aprovado" : "reprovado";
alert(`O aluno foi ${result}`);