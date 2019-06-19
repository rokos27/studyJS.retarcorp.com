//
// 1 - Написать функцию,
// которая проверит правильность расстановки круглых скобок
// во введенной строке -
// принимает в себя строку
// и возвращает true или false
// в зависимости от того, правильно ли расставлены скобки в строке.

var i;

function enterMyString() {
    var innStr;
    do {
        // ввод текста
        do {
            innStr = prompt('Введите текст со скобками');
        } while (innStr == null || !!innStr === false);

        // alert(innStr.length);

        // а есть ли скобка?
        var symbol = 0;
        for (i = 0; (i <= innStr.length && !symbol); i++) {
            if (innStr[i] === '(' || innStr[i] === ')') {
                symbol++;
            }
        }
    } while (!symbol);
    return innStr;
}

function correctBrackets(enterStr) {
    var innStr = enterStr;
    var innSum = 0;
    var brackets = '';
    var res;

    // составить строку из одних скобок
    for (i = 0; i <= innStr.length - 1; i++) {
        if (innStr[i] === '(' || innStr[i] === ')') {
             brackets = brackets + innStr[i];
        }

    }

    if (brackets[0] === ')') { // проверить первую скобку
        res = false;
        // alert('первая скобка не правильная');
    } else if (brackets[brackets.length - 1] === '(') { // проверить последнюю скобку
        res = false;
        // alert('последняя скобка не правильная');
    } else {        // подсчет парности скобок
        for (i = 0; i <= brackets.length - 1; i++) {
            switch (brackets[i]) {
                case '(':
                    innSum += 1;
                    break;
                case ')':
                    innSum += -1;
                    break;
            }
        }

        (!innSum) ? res = true : res = false;
    }
        // вывод окончательного результата.
    if (res) {
        alert('Скобки расставлены правильно.')
    } else {
        alert('Скобки расставлены НЕ правильно.');
    }
}

correctBrackets(enterMyString());



// var myString = enterMyString();
//
// correctBrackets(myString);




































