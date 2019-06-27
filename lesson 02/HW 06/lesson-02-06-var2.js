// work-branch
// !6 -
// Найти в массиве
// количество и сумму элементов,
// которые делятся на 3.

var A = 10;     // нижняя граница
var B = 100;    // верхняя граница
var n = 25;     // кол-во элементов исходного массива
var divisor = 3;// делитель
var i, j;       // счетчики

var fstArr = new Array(n);
fstArr.fill(0);
for (i in fstArr) {
    fstArr[i] = Math.floor(A + (B - A) * Math.random());
}
for (i = 0; i < fstArr.length; i++) {
    for (j = 0 ; (fstArr.length - 1 - j) > i; j++) {
        if (fstArr[j] >= fstArr[j + 1]) {
            var q = fstArr[j];
            fstArr[j] = fstArr[j+1];
            fstArr[j+1] = q;
        }
    }
}
var secArr = [];
for (i=0; i < fstArr.length; i++) {
    if (fstArr[i] % divisor === 0) {
        secArr.push(fstArr[i]);
    }
}
var amountEl = secArr.length;

var sumEl = 0;
for (i = 0; i < secArr.length; i++) {
    sumEl += secArr[i];
}

console.log('исходный   - ' + fstArr);
console.log('результат  - ' + secArr);
console.log('кол-во эл. - ' + amountEl);
console.log('сумма эл.  - ' + sumEl);
