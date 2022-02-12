let container = document.getElementById('grid')

url_string = window.location.href;
var url = new URL(url_string);
var fsquares = url.searchParams.get("fsquares");

if (fsquares > 100) {
    let cell = document.createElement("div");
    cell.className = `cell`;
    cell.innerHTML = `No more than 100 squares, please!`
    container.appendChild(cell);
    throw new Error("Something went badly wrong!");
}
else if (fsquares == null) {
    fsquares = 6;
}

divs = fsquares*fsquares;

for (let i = 0; i < divs; i++) {
    let cell = document.createElement("div");
    cell.className = `cell`;
    container.appendChild(cell);
}

container.style.gridTemplateColumns = `repeat(${fsquares}, 1fr)`;
container.style.gridTemplateRows = `repeat(${fsquares}, 1fr)`;

let target = document.getElementsByClassName(`cell`);

for (let i = 0; i < target.length; i++) {
    target[i].addEventListener("mouseover", function(e){e.target.setAttribute("style", "background-color: blueviolet;")}, false);
}

function mOver() {
    target.setAttribute("style", "background-color: blue;");
}

function clearGrid() {
    for (let i = 0; i < target.length; i++) {
        target[i].setAttribute("style", "background-color: hotpink;");
    }
}