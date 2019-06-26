//
// 1 - Написать функцию,
// которая проверит правильность расстановки круглых скобок
// во введенной строке -
// принимает в себя строку
// и возвращает true или false
// в зависимости от того, правильно ли расставлены скобки в строке.

function enterMyString() {
    var innStr;
    do {
        // ввод текста
        do {
            innStr = prompt('Введите текст со скобками');
        } while (innStr == null || !!innStr === false);
        var symbol = 0;
        for (var i = 0; (i <= innStr.length && !symbol); i++) {
            if (innStr[i] === '(' || innStr[i] === ')') {
                symbol++;
            }
        }
    } while (!symbol);
    return innStr;
}

function correctBrackets(innStr) {
    var leftBracket = 0;
    var rightBracket = 0;

    for (var i = 0; i < innStr.length; i++) {

        if (innStr[i] === '(') {
            leftBracket ++;
        } else if (innStr[i] === ')') {
            rightBracket ++;
        }

        if (leftBracket < rightBracket) {
            return false;
        }
    }

    return leftBracket === rightBracket;
}

function interpretResult(innRes) {
    if (innRes) {
        alert('Скобки расставлены правильно.')
    } else {
        alert('Скобки расставлены НЕ правильно.');
    }
}

var myString = enterMyString();
var correct = correctBrackets(myString);
interpretResult(correct);

// ((()))           - true
// ()()()           - true
// a*(a)+(a)*(a)/a  - true

// ())(()           - false
// a*(a))*((a)/a    - false
// )(()()           - false
// ()())(           - false
