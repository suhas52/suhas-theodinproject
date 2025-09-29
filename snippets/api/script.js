import { API_KEY } from "./api.js";
const img = document.querySelector('img');
const URL = "https://api.giphy.com/v1/gifs/translate";
const search = document.getElementById("search")
let querry = "";

const moreCatsBtn = document.getElementById("more-cats");

function getMoreCats(querry) {
    return fetch(`${URL}?api_key=${API_KEY}&s=${querry}`)
    .then(response => response.json())
    .then(data => data.data.images.original.url);
}
moreCatsBtn.addEventListener("click", () => {
    querry = search.value;
    
    getMoreCats(querry).then(url => {
        img.src = url;
        img.hidden = false;
    });
})