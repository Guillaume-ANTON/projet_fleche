var Engine = require('../engine/engine')

class Game {
  constructor(mode, status, date) {
    this.id = 1;
    this.name = "Game";
    this.mode = mode;
    this.status = status;
    this.date = date;
  }
}

module.exports = Game