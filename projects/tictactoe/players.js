export class Players {
    constructor() {
        this.currentTiles = [];
    }

    getTiles(choice) {
        this.currentTiles.push(choice)
    }

}