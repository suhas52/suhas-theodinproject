export class Players {
    constructor(playerNo, playerName) {
        this.currentTiles = [];
        this.playerNo = playerNo;
        this.playerName = playerName;
    }

    getTiles(choice) {
        this.currentTiles.push(choice)
    }

    updateName(playerName) {
        this.playerName = playerName;
    }

}