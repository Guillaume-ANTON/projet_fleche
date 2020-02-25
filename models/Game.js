const db = require('sqlite')

// Function route ---> db
module.exports = {
  
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