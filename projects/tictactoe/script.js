class gameBoard {
    constructor() {
        this.winningCombos = [
            ['a1', 'a2', 'a3'],
            ['b1', 'b2', 'b3'],
            ['c1', 'c2', 'c3'],
            ['a1', 'b1', 'c1'],
            ['a2', 'b2', 'c2'],
            ['a3', 'b3', 'c3'],
            ['a1', 'b2', 'c3'],
            ['a3', 'b2', 'c1'],
        ];
        this.a1 = null;
        this.a2 = null;
        this.a3 = null;
        this.b1 = null;
        this.b2 = null;
        this.b3 = null;
        this.c1 = null;
        this.c2 = null;
        this.c3 = null;
        this.sections = [this.a1, this.a2, this.a3, this.b1, this.b2, this.b3, this.c1, this.c2, this.c3];
    }
    updateBoard(nth, replacement) {
        switch (nth) {
            case "1":
            this.a1 = replacement;
            break;
            case "2":
            this.a2 = replacement;
            break;
            case "3":
            this.a3 = replacement;
            break;
            case "4":
            this.b1 = replacement;
            break;
            case "5":
            this.b2 = replacement;
            break;
            case "6":
            this.b3 = replacement;
            break;
            case "7":
            this.c1 = replacement;
            break;
            case "8":
            this.c2 = replacement;
            break;
            case "9":
            this.c3 = replacement;
            break;
        }
    }
}

class Players {
    constructor(score = 0) {
        this.currentChoices = [];
        this.score = score;
    }

    getCurrentChoices(choice) {
        this.currentChoices.push(choice)
    }
}

class DOM {
    constructor() {
        this.gameCont = document.querySelector(".game-container");
    }

    createGame() {
        for (i = 0; i <= 9; i++) {
            
        }
    }
}


const game = new gameBoard;
console.log(game.sections)