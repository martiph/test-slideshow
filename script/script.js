var body = document.getElementsByTagName("body")[0];
var container = document.createElement("div");
createSlides(container);
body.appendChild(container);

function createSlides(container) {
    var pictures = ["img1", "img2", "img3", "img4", "img5"];
    pictures.forEach(picture => {
        var div = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src", "./img/" + picture + ".jpg");
        div.appendChild(image);
        var buttonPrev = document.createElement("div");
        var buttonNext = document.createElement("div");
        buttonPrev.classList.add("prev");
        buttonPrev.innerHTML = "&#8658";
        buttonNext.classList.add("next");
        buttonNext.innerHTML = "&#8656";
        container.appendChild(buttonPrev);
        container.appendChild(buttonNext);
        container.appendChild(div);
    });
}