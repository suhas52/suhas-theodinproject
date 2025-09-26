export class Players {
    constructor(playerNo) {
        this.currentTiles = [];
        this.playerNo = playerNo;
    }

    getTiles(choice) {
        this.currentTiles.push(choice)
    }

}