
function myFunction() {
    document.getElementById("slideshow").innerHTML = '<img alt="picture" src="./img/img' + num + '.jpg" />'
}

function swipeRight() {
    switch (num) {
        case 5: num = 1;
            break;
        default:
            num++;
    }
    myFunction();
}
function swipeLeft() {
    switch (num) {
        case 1: num = 5;
            break;
        default:
            num--;
    }
    myFunction();
}

var num = 1;
myFunction();