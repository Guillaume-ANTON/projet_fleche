// class Players {
//   constructor(name) {
//     this.name = name;
//     this.score = 0;
//   }
// }
const db = require('sqlite')

module.exports = {

  getPlayers(){
    return db.run("SELECT * FROM Player")
  },
  insertPlayers(body){
    return db.run("INSERT INTO Player (name, email, createdAt) VALUES(?, ?, date('now'))", [body.name, body.email])
  },
  deletePlayers(body){
    return db.run("DELETE FROM Player WHERE id = ?", [body.id])
  },
  getGame(){
    return db.run("SELECT * FROM Game")
  },
  newGame(){
    return db.run("INSERT INTO Games (mode, name, status, cratedAt) VALUES(?, ?, date('now'))", [body.mode, body.name, body.status])
  },
  getGameId(){
    return db.run("SELECT FROM Game WHERE id = ?", [body.id])
  },

  deleteGame(body){
    return db.run("DELETE FROM Game WHERE id = ?", [body.id])
  }

}


// module.exports = Players