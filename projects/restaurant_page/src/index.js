import "./styles.css";
import { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";

const nav = document.getElementById("nav");
const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = '';
}


nav.addEventListener("click", (e) => {
    clearContent()
    switch (e.target.id) {
        case "home":
            home(content);
            break;
        case "about":
            about(content);
            break;
        case "menu":
            menu(content);
            break;
        default:
            break;
    }

})