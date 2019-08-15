
var numberN = 10; // ввод числа N
var tableName = 'Таблица умножения ' + numberN + ' x ' + numberN; // имя таблицы

var table = document.createElement('table');
document.getElementById("multiplication-table")
    .appendChild(table);

table.setAttribute('border','1');
table.setAttribute('cellpadding','5');
table.setAttribute('cellspacing','0');
table.appendChild(document.createElement('caption'))
    .innerText = tableName;

table.appendChild(document.createElement('tbody'))
    .innerHTML = new Array(numberN+1)
        .fill(0)
        .reduce((sumRows, iRow, i) => {
            return sumRows
                + '<tr>'
                + new Array(numberN+1)
                    .fill(0)
                    .reduce((sumItems, item, j) => {
                        return sumItems
                            + '<td>'
                            + (i === 0
                                ? j === 0 ? '' : j
                                : j === 0 ? i  : i * j)
                            + '</td>'
                    }, '')
                + '</tr>';
        }, '');
