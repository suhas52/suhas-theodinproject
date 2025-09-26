import { GameBoard } from "./gameboard.js";
import { DOM } from "./DOM.js";
import { Players } from "./players.js";

const game = new GameBoard;
const webpage = new DOM;
const player1 = new Players(1);
const player2 = new Players(2);
webpage.drawBoard(game.places);



webpage.gameCont.addEventListener("click", (e) => {
    if (game.count > 9) {
        alert("It's a Draw!");
        location.reload();
    }
    if (!(e.target.textContent === "-")) {
        console.log("Invalid");
    }
    else if (game.count % 2 === 1) {
        webpage.changeTileContent(player1.playerNo, e.target.id);
        webpage.currentPlayer.textContent = "Player 2";
        player1.getTiles(e.target.id)
        if (player1.currentTiles.length > 2) {
            if (game.checkWinner(player1.currentTiles)) {
                alert("Player 1 is the winner!");
                location.reload();
            }
        }
        game.count += 1;
    }
    else {
        webpage.changeTileContent(player2.playerNo, e.target.id);
        webpage.currentPlayer.textContent = "Player 1";
        player2.getTiles(e.target.id)
        console.log("test2")
        if (player2.currentTiles.length > 2) {
            if (game.checkWinner(player2.currentTiles)) {
                alert("Player 2 is the winner!");
                location.reload();
            }
        }
        game.count += 1;
    }
    
    
})