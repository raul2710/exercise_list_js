// Crie uma variável para armazenar a sua idade e outra para armazenar a idade de um amigo. Em seguida, compare as idades e exiba quem é mais velho.

var myAge =  prompt("Digite sua idade: ");
var friendAge = prompt("Digite a idade do seu amigo: ");

var result;

if(myAge>friendAge)
    result = "Você é mais velho que seu amigo";
else if(myAge==friendAge)
    result = "Vocês possuem a mesma idade";
else 
    result = "Você é mais novo que seu amigo";
    
alert(result);