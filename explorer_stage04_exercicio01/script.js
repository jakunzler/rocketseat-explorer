alert("Prezado usuário, seja bem vindo!");
let userName = prompt("Nos informe o seu nome?");
alert(`Olá, ${userName}`);


alert("Você precisa entrar com dois números para começar.");
let number01 = Number(prompt("Digite o primeiro número e clique no botão 'ok'"));
let number02 = Number(prompt("Em seguida, digite o segundo número e clique em 'ok'"));

let sumResult = function sum(number01, number02) {
    operationResult = number01 + number02;
    return operationResult;
}

let subResult = function subtraction(number01, number02) {
    operationResult = number01 - number02;
    return operationResult;
}

let multResult = function multiplication(number01, number02) {
    operationResult = number01 * number02;
    return operationResult;
}

let divResult = function division(number01, number02) {
    operationResult = number01 / number02;
    return operationResult;
}

let restResult = function remainder(number01, number02) {
    operationResult = number01 % number02;
    return operationResult;
}

function sumEvenOdd(number01, number02) {
    return ((number01 + number02) % 2 == 0 ? "par" : "ímpar");
}

let numberEvenOdd = sumEvenOdd(number01, number02);

function equalNumbers(number01, number02) {
    return (number01 == number02 ? "Os números são iguais" : "Os números não são iguais");
}

let isEqual = equalNumbers(number01, number02);

alert(`A soma dos dois números é ${sumResult(number01, number02)}`);
alert(`A subtração dos dois números é ${subResult(number01, number02)}`);
alert(`O produto dos dois números é ${multResult(number01, number02)}`);
alert(`A razão entre os dois números é ${divResult(number01, number02)}`);
alert(`O resto da divisão entre os dois números é ${restResult(number01, number02)}`)


alert(`A soma dos dois números é ${numberEvenOdd}`);
alert(`${isEqual}`);

// document.getElementById("sum").innerHTML = sumResult(number01, number02);