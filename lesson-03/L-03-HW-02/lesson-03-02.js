// 2
// Создать массив из списка имен.
// Сгенерировать массив из 100 объектов типа «Человек».
// У каждого объекта должно быть
// случайным образом выбрано
// имя, возраст, а также метод,
// который выводит имя и возраст данного человека.
// Прогнать методом обхода по этому массиву
// и заставить каждого человека представиться.

var namesArr = [
    'Alexey'
    ,'Andrei'
    ,'Boris'
    ,'Vadim'
    ,'Victor'
    ,'Georgiy'
    ,'Denis'
    ,'Ivan'
    ,'Iosif'
    ,'Moisey'
    , 'Alisa'
    , 'Vera'
    , 'Daria'
    , 'Elena'
    , 'Zinaida'
    , 'Inna'
    , 'Ksenia'
    , 'Maria'
    , 'Nina'
    , 'Svetlana'
];
var minAge = 3;     // уже умеем говорить
var maxAge = 90;    // еще можем говорить
var n = 10;        // кол-во объектов типа человек
var sayNameAge = function (name, age) {
    console.log(
        'My name is ' + name
        + '. I am ' + age + '.'
    );
};
var sayAgeName = function (name, age) {
    console.log(
        'I am ' + age + '. My name is ' + name + '.'
    );

};

var people = [];

for (var i = 0; i < n; i++) {
    (function(x){
        people[x] = {
            name: namesArr[Math.floor(namesArr.length * Math.random())]
            ,age: Math.floor(minAge + (maxAge - minAge) * Math.random())
            ,myFunc: function() {
                console.log(
                    'My name is ' + this.name
                    + '. I am ' + this.age + '.'
                );
            }
        };
    })(i);
}

console.log(people);

people.forEach(function (elem) {
    elem.myFunc();
});