
// Сгенерировать массив из 1000 случайных чисел
// в диапазоне s ± p%,
// отсортировать его по убыванию остатков от деления на 10

var A = 400;        // медиана диапазона: s
var B = 50;         // отклонение диапазона: ± p%
var n = 1000;       // кол-во элементов исходного массива


var minA = Math.floor(A - A * B / 100);
var maxA = Math.floor(A + A * B / 100);

var arr = new Array(n);
arr.fill(0);

for (var i in arr) {
    arr[i] = Math.floor(minA + (maxA - minA) * Math.random());
}

arr.sort(function (a, b) {
    return  a - b;
})
    .sort(function (a, b) {
    return  b % 10 - a % 10;
});

console.log(arr);
