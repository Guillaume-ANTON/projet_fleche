const db = require('sqlite')

// Function route ---> db
module.exports = {

  getPlayers(){
    return db.run("SELECT * FROM Player")
  },
  insertPlayers(body){
    return db.run("INSERT INTO Player (name, email, createdAt) VALUES(?, ?, date('now'))", [body.name, body.email])
  },
  deletePlayers(body){
    return db.run("DELETE FROM Player WHERE id = ?", [body.id])
  }

}