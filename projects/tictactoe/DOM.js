export class DOM {
    constructor() {
        this.gameCont = document.querySelector(".game-container");
        this.currentPlayer = document.querySelector(".current-player");
        this.p1Name = document.getElementById("p1");
        this.p2Name = document.getElementById("p2");
        this.resetButton = document.getElementById("reset");
        this.form = document.getElementById("name-form");
    }
    
    drawBoard(object) {
        for (const [key, value] of Object.entries(object)) {
            const div = document.createElement("div");
            div.id = key;
            div.textContent = value;
            div.className = "tile";
            div.style.width = "33.3%";
            div.style.height = "33.3%";
            div.style.fontWeight = "bold";
            div.style.fontSize = "20pt";
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

    updateScreenPlayer(name) {
        this.currentPlayer.textContent = name
    }

    resetDOM() {
        this.gameCont.innerHTML = "";
        this.p1Name.value = "";
        this.p2Name.value = "";
        this.currentPlayer.textContent = "";
    }
}