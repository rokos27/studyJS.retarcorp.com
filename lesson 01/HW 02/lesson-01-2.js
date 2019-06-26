
// 2 - Вычислить значение функции arcsin по ряду Тейлора в точке X, используя N первых членов (X, N вводятся).

function enterX() {
    var innX;
    do {
        innX = +prompt('Введите число "х" от 0 до 1', '');
        if (0 <= innX && 1 >= innX) {
            return innX;
        }
        else {
            alert('Введите число от 0 до 1');
            innX = true;
        }
    } while ( innX );
}

function enterN() {
    var innN;
    do {
        innN = parseInt(+prompt('Введите число "n" >= 0', ''));
        if (0 <= innN) {
            return innN;
        }
        else {
            alert('Введите число >= 0');
            innN = true;
        }
    } while ( innN );

}


// решение с одинарным факториалом
function factorial(innN) {
    var res = 1;
    for (var i = 0; i <= innN; i++) {

        (i) ? res *= i : res;
    }
    return res;
}

function tailorArcsin(pointX, memberN) {
    var res = 0;
    var q;
    var w;
    var e;

    for (var i = 0; i <= memberN; i++) {
        q = (factorial(2 * i));
        w = (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2 * i + 1));
        if (w === Infinity || q === Infinity) {
            alert('Остановлено на member = ' + i);
            return res;
        }
        e = (Math.pow(pointX, (2 * i +1)));
        res += q * e / w;
    }
    return res;
}


// решение с двойным факториалом
function doubleFactorial(innN) {
    innN = Math.abs(innN);
    var res = 1;
    for (var i = innN; i >= 0; i -= 2) {

        (i) ? res *= i : res;
    }
    return res;

}

function tailor2Arcsin(pointX, memberN) {
    var res = 0;
    var q2;
    var w2;
    var e2;

    for (var i = 0; i <= memberN; i++) {
        q2 = doubleFactorial(2 * i - 1);
        w2 = (doubleFactorial(2 * i) * (2 * i + 1));
        if (w2 === Infinity || q2 === Infinity) {
            alert('Остановлено на member = ' + i);
            return res;
        }
        e2 = (Math.pow(pointX, (2 * i +1)));
        res += (q2 / w2) * e2;
    }
    return res;
}


function myResult(pointX, memberN) {
    var res = confirm('Формула с одинарным факториалом - "OK". Формула с двойным факториалом - "CANCEL" ');

    if (res) {

        var tArcsin = tailorArcsin(pointX, memberN);
        alert('Результат с одинарным факториалом = ' + tArcsin);

    } else {

        var t2Arcsin = tailor2Arcsin(pointX, memberN);
        alert('Результат с двойным факториалом = ' + t2Arcsin);
    }
}

var pointX = enterX();
var memberN = enterN();
myResult(pointX, memberN);