
var numberN = 30; // ввод числа N -> x
var numberM = 100; // ввод числа M -> y
var tableName = 'Таблица ' + numberN + ' x ' + numberM; // имя таблицы

function isPrime(num) {
    var arrFirstPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    var arrSecondPrime = [31, 37, 41, 43, 47, 49, 53, 59]; //wheel factorization
    var sqrRootNum = Math.sqrt(num);

    if (num === 0 || num === 1) {
        return false;
    } else if (arrFirstPrime.some(elem => elem === num)) {
        return true;
    } else if (arrFirstPrime.some(elem => num % elem === 0)) {
        return false;
    }

    while (arrSecondPrime[arrSecondPrime.length-1] <= sqrRootNum
    && arrSecondPrime.every(elem => num % elem !== 0)) {
        arrSecondPrime = arrSecondPrime.map(elem => elem + 30);
    }
    return !(arrSecondPrime[arrSecondPrime.length - 1] <= sqrRootNum
        || arrSecondPrime.some(elem => elem <= sqrRootNum && num % elem === 0));
}

var entryDiv = document.getElementById("table");

var table = document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('cellpadding','1');
table.setAttribute('cellspacing','0');
entryDiv.appendChild(table);

var tCaption = document.createElement('caption');
tCaption.innerText = tableName;
table.appendChild(tCaption);

var tBody = document.createElement('tbody');

tBody.innerHTML = new Array(numberM)
    .fill(0)
    .reduce((sumRows, iRow, i) => {
        return sumRows
            + '<tr>'
            + new Array(numberN)
                .fill(0)
                .reduce((sumItems, item, j) => {
                    return sumItems
                        + '<td>' + (i*numberN + j+1) + '</td>';
                    }, '')
            + '</tr>';
    }, '');
table.appendChild(tBody);

document.querySelectorAll('tbody')[0]
    .childNodes
    .forEach((iRow, i) =>
        {iRow.childNodes.forEach((item, j) =>
            item.setAttribute('class',
                ((isPrime(i*numberN + j + 1)) ? 'dark' : '')
            )
        )}
    );
