
function myFunction() {
    document.getElementById("slideshow").innerHTML = '<img alt="picture" src="./img/img' + num + '.jpg" />'
}

function swipeRight() {
    if (num < 5) {
        num++;
    } else if (num == 5) {
        num = 1;
    } else {
        num = 5;
    }
    myFunction();
}
function swipeLeft() {
    if (num > 1) {
        num--;
    } else if (num == 1) {
        num = 5;
    } else {
        num = 1;
    }
    myFunction();
}

var num = 1;
myFunction();