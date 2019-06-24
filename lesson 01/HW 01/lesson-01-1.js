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

function correctBrackets(enterStr) {
    var innStr = enterStr;
    var leftBracket = 0;
    var rightBracket = 0;
    var resMid = true;
    var res;

    for (var i = 0; i < innStr.length; i++) {

        if (innStr[i] === '(') {
            leftBracket ++;
        } else if (innStr[i] === ')') {
            rightBracket ++;
        }

        if (leftBracket < rightBracket) {
            resMid = false;
            break;
        }
    }

    leftBracket === rightBracket && resMid ? res = true : res = false;

    return res;
}

function interpretResult(enterRes) {
    var innRes = enterRes;
    if (innRes) {
        alert('Скобки расставлены правильно.')
    } else {
        alert('Скобки расставлены НЕ правильно.');
    }
}

interpretResult(correctBrackets(enterMyString()));

// ((()))           - true
// ()()()           - true
// a*(a)+(a)*(a)/a  - true

// ())(()           - false
// a*(a))*((a)/a    - false
// )(()()           - false
// ()())(           - false
