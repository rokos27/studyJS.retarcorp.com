
// !6 -
// Найти в массиве
// количество и сумму элементов,
// которые делятся на 3.

// исходный массив
var A = 10;     // нижняя граница
var B = 100;    // верхняя граница
var n = 25;     // кол-во элементов

var originalArray = enterArray(A, B, n);

var myArr =myArray(originalArray, 3);

var amountEl = amountOfElements(myArr);

var sumEl = sumOfElements(myArr);

console.log('исходный   - ' + originalArray);
console.log('результат  - ' + myArr);
console.log('кол-во     - ' + amountEl);
console.log('сумма      - ' + sumEl);

function enterArray(A, B, n) {
    var arr = new Array(n);
    arr.fill(0);
    for (var x in arr) {
        arr[x] = Math.floor(A + (B - A) * Math.random());
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0 ;  (arr.length - 1 - j) > i; j++) {
            if (arr[j] >= arr[j + 1]) {
                var q = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = q;
            }
        }
    }
    return arr;
}

function myArray(arr, divisor) {
    var innArr = [];
    for (var i=0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            innArr.push(arr[i]);
        }
    }
    return innArr;
}

function amountOfElements(arr) {
    return arr.length;
}

function sumOfElements(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}