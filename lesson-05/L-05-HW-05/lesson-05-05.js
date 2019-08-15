
var numberN = 20; // ввод числа N -> x
var numberM = 20; // ввод числа M -> y
var classAlive = 'alive';
var classDead = 'dead';
var firstTable = true;
var allMatricies = [];
var rateOfRegeneration = 50; //
var tableName = 'Таблица ' + numberN + ' x ' + numberM; // имя таблицы


function getFirstTable() {
    return new Array(numberM)
        .fill(0)
        .map(function () {
            return new Array(numberN)
                .fill(0)
                .map(function () {
                    return (Math.floor(Math.random() * 2) !== 0);
                });
        });
}

function recountDataMatrix(matrix) {
    var grandParent = document.querySelector('tbody');
    return matrix.map(function (itemY, i) {
        return  itemY.map(function (itemX, j) {
            return isAliveOrDead(grandParent
                .children[i]
                .children[j]);
        });
    });
}

function isAliveOrDead(iDot) {
    var neighborAlive = dotNeighbors(iDot)
        .filter(item => item
            .getAttribute('class') === classAlive)
        .length;
    return iDot.getAttribute('class') === classAlive
        ? (neighborAlive === 2 || neighborAlive === 3)
        : neighborAlive === 3;
}

function dotNeighbors(iDot) {
    var iDotX = iDot.cellIndex;                     // td
    var iDotY = iDot.parentNode.rowIndex;           // tr
    var grandParent = iDot.parentNode.parentNode;   // tbody
    var coordinatesOfNeighbors =   [[-1, -1], [-1, 0], [-1, 1],
                                    [ 0, -1], [ 0, 1],
                                    [ 1, -1], [ 1, 0], [ 1, 1]];
    return coordinatesOfNeighbors
        .filter(item => grandParent
            .children[iDotY + item[0]] !== undefined    // tr
            && grandParent
            .children[iDotY + item[0]]
            .children[iDotX + item[1]] !== undefined)   // td
        .map(item => grandParent
            .children[iDotY + item[0]]
            .children[iDotX + item[1]]);
}

function createTableInner(matrix) {
    tBody.innerHTML = matrix.reduce((sumRows, iRow) => {
        return sumRows
            + '<tr>'
            + iRow.reduce((sumItems, item) => {
                return sumItems
                    + (item
                        ? '<td class="' + classAlive + '">' + '</td>'
                        : '<td class="' + classDead +  '">' + '</td>');
                }, '')
            + '</tr>';
    }, '');
    table.appendChild(tBody);
}

var table = document.createElement('table');
document.getElementById('table').appendChild(table);

table.setAttribute('border','1');
table.setAttribute('cellpadding','0');
table.setAttribute('cellspacing','0');
table.appendChild(document.createElement('caption'))
    .innerText = tableName;

var tBody = document.createElement('tbody');
var i=1;
var matrix = [];
var timer = setInterval(function() {
    matrix = firstTable
        ? getFirstTable()
        : recountDataMatrix(matrix);
    firstTable = false;
    createTableInner(matrix);
    if (allMatricies.some(item => !(item < matrix || item > matrix))) {
        clearInterval(timer);
    } else {
        allMatricies.unshift(matrix);
        document.querySelector('caption')
            .innerHTML = tableName + '. Step - ' + i;
    }
    i++;
}, rateOfRegeneration);
