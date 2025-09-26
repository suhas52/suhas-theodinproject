import { GameBoard } from "./gameboard.js";
import { DOM } from "./DOM.js";
import { Players } from "./players.js";

const game = new GameBoard;
const webpage = new DOM;
const player1 = new Players(1, "player1")
const player2 = new Players(2, "player2")
webpage.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    player1.updateName(formData.get("p1"));
    player2.updateName(formData.get("p2"));
    webpage.updateScreenPlayer(player1.playerName)
})



webpage.drawBoard(game.places)


webpage.resetButton.addEventListener("click", () => {
    game.resetGame();
    webpage.drawBoard(game.places);
});

webpage.gameCont.addEventListener("click", (e) => {
    if (game.count > 9) {
        alert("It's a Draw!");
        game.resetGame();
        webpage.resetDOM();
        webpage.drawBoard(game.places);
    }
    if (!(e.target.textContent === "-")) {
        console.log("Cannot use the same tile twice.");
    }
    else if (game.count % 2 === 1) {
        webpage.changeTileContent(player1.playerNo, e.target.id);
        webpage.currentPlayer.textContent = player2.playerName;
        player1.getTiles(e.target.id)
        if (player1.currentTiles.length > 2) {
            if (game.checkWinner(player1.currentTiles)) {
                alert(`${player1.playerName} is the winner!`);
                game.resetGame();
                webpage.resetDOM();
                webpage.drawBoard(game.places);
            }
        }
        game.count += 1;
    }
    else {
        webpage.changeTileContent(player2.playerNo, e.target.id);
        webpage.currentPlayer.textContent = player1.playerName;
        player2.getTiles(e.target.id)
        if (player2.currentTiles.length > 2) {
            if (game.checkWinner(player2.currentTiles)) {
                alert(`${player2.playerName} is the winner!`);
                game.resetGame();
                webpage.resetDOM();
                webpage.drawBoard(game.places);
            }
        }
        game.count += 1;
    }
    
    
})