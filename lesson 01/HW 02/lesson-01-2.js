// 2 - Вычислить значение функции arcsin по ряду Тейлора в точке X, используя N первых членов (X, N вводятся).

var x;
var n;

function enterX() {
    var innX;
    do {
        innX = +prompt('Введите число "х" от 0 до 1', '');
        if (0 <= innX && 1 >= innX) {
            // alert('x = ' + innX + ', ' + typeof innX);
        }
        else {
            alert('Введите число от 0 до 1');
            innX = undefined;
        }
    } while ( undefined === innX );
    return innX;
}

function enterN() {
    var innN;
    do {
        innN = parseInt(+prompt('Введите число "n" >= 0', ''));
        if (0 <= innN) {
            // alert('n = ' + innN + ', ' + typeof innN);
        }
        else {
            alert('Введите число >= 0');
            innN = undefined;
        }
    } while ( undefined === innN );
    return innN;
}


// решение с одинарным факториалом
function factorial(enterN) {
    var innN = enterN;
    var res = 0;
    for (var i = 0; i <= innN; i++) {

        (i) ? res *= i : res = 1;

    }

    return res;
}

function tailorArcsin(enterX, enterN) {
    var pointX = enterX;
    var memberN = enterN;
    var resMid = 0;
    var res = 0;
    var q;
    var w;
    var e;

    for (var i = 0; i <= memberN; i++) {

        q = (factorial(2 * i)); //max 86
        // alert('q = ' + q);

        w = (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2 * i + 1)); //max 85
        // alert('w = ' + w);
        if (w === Infinity || q === Infinity) {
            alert('Остановлено на member = ' + i);
            break;
        }

        e = (Math.pow(pointX, (2 * i +1)));

        resMid = q * e / w;

        res = res + resMid;

        // alert(i + ',   ' + resMid);
    }
    return res;
}


// решение с двойным факториалом
function doubleFactorial(enterN) {
    var innN = Math.abs(enterN);
    var res;
    var resMid = 1;
    // let res;
    for (var i = innN; i >= 0; i -= 2) {
        if (i) {
            resMid = resMid * i;
            // alert(resMid + ', i - ' + i);

        } else {
            resMid *= 1;
            // alert('else ' + resMid);
        }
        res = resMid;
        // alert(res)
    }
    return res;

}

function tailor2Arcsin(enterX, enterN) {
    var pointX = enterX;
    var memberN = enterN;
    var resMid = 0;
    var res = 0;
    var q2;
    var w2;
    var e2;

    for (var i = 0; i <= memberN; i++) {

        q2 = doubleFactorial(2 * i - 1);

        w2 = (doubleFactorial(2 * i) * (2 * i + 1));

        if (w2 === Infinity || q2 === Infinity) {
            alert('Остановлено на member = ' + i);
            break;
        }

        e2 = (Math.pow(pointX, (2 * i +1)));

        resMid = (q2 / w2) * e2;

        res = res + resMid;
    }

    return res;
}



function myResult(enterX, enterN) {
    var res;
    var innX = enterX;
    var innN = enterN;

    res = confirm('Формула с одинарным факториалом - "OK". Формула с двойным факториалом - "CANCEL" ');

    if (res) {

        var tArcsin = tailorArcsin(innX, innN);
        alert('Результат с одинарным факториалом = ' + tArcsin);

    } else {

        var t2Arcsin = tailor2Arcsin(innX, innN);
        alert('Результат с двойным факториалом = ' + t2Arcsin);
    }
}



myResult(enterX(), enterN());


// // ввод данных
// x = enterX(); // ввод числа Х
// // alert(x); // проверка - что хранится в var х
//
// n = enterN(); // ввод числа N
// // alert(n); // проверка - что хранится в var n
//
// myResult(x, n);































