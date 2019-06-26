// 3 - Написать калькулятор –
// пользователем вводится первое число,
// операция (символ),
// второе число
// и пользователю выводится ответ.


function myCalc() {
    var firstNumber;
    var secondNumber;
    var myOperation;
    var res;
    var q = false;

    do {
        do {
            firstNumber = parseFloat(prompt('Введите первое число'));
        } while (isNaN(firstNumber));

        do {
            myOperation = prompt('Введите символ операции');
            switch (myOperation) {
                case '+':
                case '-':
                case '*':
                case '/':
                    q = true;
            }
        } while (!q);

        do {
            secondNumber = parseFloat(prompt('Введите второе число'));
        } while (isNaN(secondNumber));

        switch (myOperation) {
            case '+':
                res = firstNumber + secondNumber;
                break;
            case '-':
                res = firstNumber - secondNumber;
                break;
            case '*':
                res = firstNumber * secondNumber;
                break;
            case '/':
                res = firstNumber / secondNumber;
        }
        alert('Результат операции: ' + firstNumber + ' ' + myOperation + ' ' + secondNumber + ' = ' + res);

        var conf = confirm('Желаете еще раз?');

    } while (conf);
}

myCalc();
















