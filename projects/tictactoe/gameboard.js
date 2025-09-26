export class GameBoard {
    constructor() {
        this.places = {
            a1: "-", a2: "-", a3: "-",
            b1: "-", b2: "-", b3: "-",
            c1: "-", c2: "-", c3: "-"
        };
        this.winningTiles = [
            ["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"],
            ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"],
            ["a1", "b2", "c3"], ["c1", "b2", "a3"]
        ];
        this.count = 1;
    }
    
    checkWinner(playerTiles) {
        return this.winningTiles.some(combo =>
            combo.every(tile => playerTiles.includes(tile))
        );
    }

    resetGame() {
        this.places = {
            a1: "-", a2: "-", a3: "-",
            b1: "-", b2: "-", b3: "-",
            c1: "-", c2: "-", c3: "-"
        }; 
        this.count = 1;
    }
}

