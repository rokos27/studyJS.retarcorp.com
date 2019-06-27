// !2 -
// Ввести две строки
// и проверить, являются ли они анаграммами друг друга
// (составлены из того же набора символов).
// (Совет – разбить обе строки на массив,
// отсортировать оба массива,
// склеить массивы в строки
// и сравнить получившиеся строки)

var firstString = 'qwer    tyuiop? - asdf. ghjkl, + zxcvbnm!';
var secondString = 'zxcvbnm qwertyuiop asdfghjkl';

var firstAnagram = toSortString(firstString);
var secondAnagram = toSortString(secondString);

var res;

if (firstAnagram === secondAnagram) {
    res = 'Строки являются анаграммами';
} else {
    res = 'Строки НЕ являются анаграммами';
}
alert(res);

function toSortString(enterString) {
    var word = enterString.toLowerCase();
    word = word.split(/[\s,.?\-!+]+/);
    word = word.join('');
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}
