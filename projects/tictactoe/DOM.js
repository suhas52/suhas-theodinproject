export class DOM {
    constructor() {
        this.gameCont = document.querySelector(".game-container");
    }
    
    drawBoard(object) {
        for (const [key, value] of Object.entries(object)) {
            const div = document.createElement("div");
            div.id = key;
            div.textContent = value;
            div.className = "tile";
            div.style.width = "33.3%";
            div.style.height = "33.3%";
            this.gameCont.appendChild(div);
        };
    };
    
    changeTileContent(playerNo, id) {
        const tile = document.getElementById(id);
        if (playerNo === 1) {
            tile.textContent = "X";
        }
        else {
            tile.textContent = "O";
        }
    }

}