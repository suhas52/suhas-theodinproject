const btnContainer = document.querySelector(".button-container");
const buttonContents = ["C", "Sq", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
const buttons = {};

buttonContents.forEach(element => {
    const key = `btn-${element}`;
    buttons[key] = document.createElement("button");
    buttons[key].id = key
    buttons[key].style.width = "25%";
    buttons[key].style.height = "15%";
    buttons[key].textContent = element;
    btnContainer.appendChild(buttons[key]);
});

console.log(buttons)