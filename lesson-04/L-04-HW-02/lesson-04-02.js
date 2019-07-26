
var scrollSpeed = 1250; // px per sec
var scrollSmoothness = 50; // плавность - steps per sec

var pxPerStep = scrollSpeed / scrollSmoothness; // px per step
var secPerStep = 1000 / scrollSmoothness; // sec per step

alert('Вариант с setInterval');
var timerId = setInterval(function() {
    var previousScrollY = window.scrollY;
    scrollBy(0, pxPerStep);
    if (0 === (window.scrollY - previousScrollY)){
        clearInterval(timerId);
        alert('Stop. В начало');
        scrollTo(0, 0);
    }
}, secPerStep);

// alert('Вариант с setTimeout');
// function scrollDown() {
//     var timerId2 = setTimeout(function go() {
//         var previousScrollY = window.scrollY;
//         scrollBy(0, pxPerStep);
//         if (0 !== (window.scrollY - previousScrollY)) {
//             setTimeout(go, secPerStep);
//         }
//         else {
//             alert('Stop. В начало');
//             scrollTo(0, 0);
//         }
//     }, secPerStep);
// }
// scrollDown();