
function howManyNodes(typeOfNode) {
    return Array.from(document.childNodes)
        .reduce(function reducer(sum, iNode) {
        var arrNextNodeList = Array.from(iNode.childNodes);
        if (arrNextNodeList.length !== 0) {
            sum = arrNextNodeList.reduce(reducer, sum);
        }
        return sum + (iNode.nodeType === typeOfNode ? 1 : 0);
    }, 0);
}

var typeOfNode1 = 1;
console.log('Тэгов - ' + howManyNodes(typeOfNode1));

var typeOfNode3 = 3;
console.log('Текстовых узлов - ' + howManyNodes(typeOfNode3));

var typeOfNode8 = 8;
console.log('Комментариев в формате HTML - ' + howManyNodes(typeOfNode8));
