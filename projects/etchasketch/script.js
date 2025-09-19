const flexCont = document.querySelector(".flex-container");
const playBtn = document.getElementById("playbtn");

function calcSize(numSquares) {
    let side = Math.sqrt(numSquares);
    let size = 100 / side;
    return size;
}

function randColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return `#${randomColor}`;
}

function renderSquares(size, numSquares, elements) {
    for (let i = 1; i <= numSquares; i++) {
        const key = `sq${i}inside`;
        elements[key] = document.createElement("div");
        elements[key].style.width = `${size}%`;
        elements[key].style.height = `${size}%`;
        elements[key].id = key;
        flexCont.appendChild(elements[key]);
};
}


flexCont.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target && target.id) {
        target.style.backgroundColor = randColor();
    }
});

function deleteChild() {
    let child = flexCont.lastElementChild;
    while (child) {
        flexCont.removeChild(child);
        child = flexCont.lastElementChild;
    }
}

function getNumSquares() {
    let numSquares = 0;
    while (numSquares < 16 || numSquares > 100) {
        numSquares = prompt("Please enter a number between 16 and 100.");
    }
    return numSquares;
}

playBtn.addEventListener("click", () => {
    deleteChild();
    numSquares = getNumSquares();
    let elements = {};
    size = calcSize(numSquares);
    renderSquares(size, numSquares, elements);
})