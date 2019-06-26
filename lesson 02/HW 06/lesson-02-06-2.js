

function myArray(arr, divisor) {
    var secArr = [];
    for (var i=0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            secArr.push(arr[i]);
            alert(secArr);
        }
    }
}

var a = [1,2,3,4,5,6,7,8,9,10];
var q = myArray(a, 3);