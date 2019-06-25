{// !2 -
// Ввести две строки
// и проверить, являются ли они анаграммами друг друга
// (составлены из того же набора символов).

// (Совет – разбить обе строки на массив,
// отсортировать оба массива,
// склеить массивы в строки
// и сравнить получившиеся строки)
}

var firstString = 'qwer    tyuiop? - asdf. ghjkl, + zxcvbnm!';
var secondString = 'zxcvbnm qwertyuiop asdfghjkl';

var firstAnagram = toSortString(firstString);
var secondAnagram = toSortString(secondString);

alert(firstAnagram + ', ' + secondAnagram);

alert(comparisonOfStrings(firstAnagram, secondAnagram));

function toSortString(enterString) {
    var word = enterString.toLowerCase();
    word = word.split(/[\s,.?\-!+]+/);
    word = word.join('');
    word = word.split('');
    var q;

    for (var i = 0; i < word.length; i++) {
        for (var j = 0 ;  (word.length - 1 - j) > i; j++) {

            if (word[j].charCodeAt(0) >= word[j + 1].charCodeAt(0)) {
                q = word[j];
                word[j] = word[j+1];
                word[j+1] = q;
            }
        }
    }
    word = word.join('');
    return word;
}

function comparisonOfStrings(enterFirstStr, enterSecondStr) {
    var innFirstStr = enterFirstStr;
    var innSecondStr = enterSecondStr;
    if (innFirstStr === innSecondStr) {
        return 'Строки являются анаграммами';
    } else {
        return 'Строки НЕ являются анаграммами';
    }

}
