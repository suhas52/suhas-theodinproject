

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
const para = document.createElement("p");
para.textContent = "Hey I'm red!" 
para.style.color = "red";
container.appendChild(para);

const blueh3 = document.createElement("h3");
blueh3.textContent = "Im a blue h3!";
blueh3.style.color = "blue";
container.appendChild(blueh3)

const newdiv = document.createElement("div");
newdiv.style.backgroundColor = "pink";
newdiv.style.border = "solid black 5px";

const newh1 = document.createElement("h1");
newh1.textContent = "I'm in a div";
const newp = document.createElement("p");
newp.textContent = "ME TOO!";
newdiv.appendChild(newh1);
newdiv.appendChild(newp);
container.appendChild(newdiv)

const btn = document.createElement("button");
btn.textContent = "Click me!";

function hello() {
    btn.addEventListener("click", () => {
        alert("Hello, World!");
    });
};

newdiv.appendChild(btn)
hello()
