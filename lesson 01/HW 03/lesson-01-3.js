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


    do {

        do {
            firstNumber = parseFloat(prompt('Введите первое число'));
            // alert(typeof firstNumber + ', ' + firstNumber);
            // alert('Вы ввели: ' + firstNumber);
        } while (isNaN(firstNumber));

        do {
            var q = 0;
            myOperation = prompt('Введите символ операции');
            switch (myOperation) {
                case '+':
                case '-':
                case '*':
                case '/':
                    q = 1;
            }
            // alert('Вы ввели: ' + myOperation);
        } while (!q);

        do {
            secondNumber = parseFloat(prompt('Введите второе число'));
            // alert(typeof secondNumber + ', ' + secondNumber);
            // alert('Вы ввели: ' + secondNumber);
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
                break;
        }

        alert('Результат операции: ' + firstNumber + ' ' + myOperation + ' ' + secondNumber + ' = ' + res);

        var conf = confirm('Желаете еще раз?');

        // alert(typeof conf + ', ' + conf);

    } while (conf);
}

myCalc();
















