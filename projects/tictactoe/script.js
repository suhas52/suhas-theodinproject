import { GameBoard } from "./gameboard.js";
import { DOM } from "./DOM.js";
import { Players } from "./players.js";

const game = new GameBoard;
const webpage = new DOM;
const player1 = new Players;
const player2 = new Players;

webpage.drawBoard(game.places);
