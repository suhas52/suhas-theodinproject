import { API_KEY } from "./api.js";
const img = document.querySelector('img');
const URL = "https://api.giphy.com/v1/gifs/translate";
const search = document.getElementById("search")
let query = "";

const moreCatsBtn = document.getElementById("more-cats");

async function getMoreGifs(query) {
    const response = await fetch(`${URL}?api_key=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data.data.images.original.url;
}


moreCatsBtn.addEventListener("click", () => {
    query = search.value;
    
    getMoreGifs(query).then(url => {
        img.src = url;
        img.hidden = false;
    });
})