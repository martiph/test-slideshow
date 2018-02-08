var body = document.getElementsByTagName("body")[0];
var container = document.createElement("div");
container.setAttribute("id", "container");
container.appendChild(document.createElement("div"));
body.appendChild(container);
createSlides(container);

function createSlides(container) {
    var pictures = ["img1", "img2", "img3", "img4", "img5"];
    var allDiv = [];
    for (var i = 0; i < pictures.length; i++) {
        var div = document.createElement("div");
        var image = document.createElement("img");

        image.setAttribute("src", "./img/" + pictures[i] + ".jpg");

        var buttonPrev = document.createElement("button");
        var buttonNext = document.createElement("button");
        buttonPrev.setAttribute("id", "prev");
        buttonPrev.innerHTML = "&#8656";
        buttonNext.setAttribute("id", "next");
        buttonNext.innerHTML = "&#8658";

        div.appendChild(image);
        div.appendChild(buttonPrev);
        div.appendChild(buttonNext);
        allDiv.push(div);
    }
    for (var i = 0; i < 5; i++) {
        container.replaceChild(allDiv[i], container.children[0]);
        // previous
        document.getElementById("prev").addEventListener("click", function () { displayImage(allDiv, i, "left") });
        // next
        document.getElementById("next").addEventListener("click", function () { displayImage(allDiv, i, "right") });
    }

    displayImage(allDiv, 0, "same");
}

function displayImage(allDiv, counter, direction) {
    if (direction == "right") {
        counter = (counter + 1) % 5;
    } else if (direction == "left") {
        if (counter == 0) { counter = 4 } else { counter--; }
    } else {
        counter = counter;
    }
    var container = document.getElementById("container");
    container.replaceChild(allDiv[counter], container.children[0]);
}