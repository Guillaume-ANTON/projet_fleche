var inquirer = require('inquirer');
var Players = require ('./Players');
var Game = require('./Games');


console.log('Engine lancé !!');

var nbPlayers = null;
var Mode = null;
var TabPlayers = [];
var questionNomJoueurs = [];
var statusGame = 'draft';
var now = new Date();

// Function to check number for slect number of players
function checkPlayersInStart(nombre) {
  if(nombre > 1 && nombre < 5) {
    return true;
  } else {
    return "Entrer un nombre compris entre 2 et 4";
  }
}

// Create Game
function newGame(){
  statusGame = 'started';
  let game = new Game(Mode, statusGame, now);
  console.log(game) 
}

// Function for say when party is finish
function isFinished(status){
  if(status === 'draft') {
    return true;
  } else if (status === 'started') {
    return true;
  } else {
    console.log("La partie est finit merci d'avoir joué")
  }
}

// Function shoot
function shoot(){
  for (var i = 0; i < nbPlayers; i++){
    inquirer.prompt[{
      type: 'input',
      name: 'shoot'+(i+1),
      message: 'C est au joueur'+(i+1) 
    }]
  }
}

// Function for make random players for start
function randPlayers (TabPlayers){
  const randomName = TabPlayers[Math.floor(Math.random() * TabPlayers.length)];
  console.log(`C'est à ${randomName} de commencer`)
}

var questionJoueurs = [
  {
    type: 'input',
    name: 'nbPlayers',
    message: 'Entrer le nombre de players',
    default: '2',
    validate: checkPlayersInStart,
  }
]

var choiceMode = [
  {
    type: 'list',
    name: 'modeGame',
    message: 'Choisisez le mode de jeux',
    choices: ['Tour du monde', '301', 'Cricket']

  }
]

//  Start engine
inquirer.prompt(questionJoueurs).then(answers => {
  nbPlayers = answers.nbPlayers;
  for (var i = 0; i < nbPlayers; i++) {
    questionNomJoueurs.push({
      type: 'input',
      name: 'namePlayers'+(i+1),
      message: 'Entrer le nom du joueur'+(i+1)
    })
  }
  inquirer.prompt(questionNomJoueurs).then(answers => {
    for (var namePlayers in answers) {
      let players = new Players(answers[namePlayers]);
      console.log(players)
      TabPlayers.push(answers[namePlayers]);
  }
    inquirer.prompt(choiceMode).then(answers => {
      Mode = answers.modeGame
      if(Mode === 'Tour du monde'){
        console.log(`Vous avez choisi le ${Mode}`)
      } else if(Mode === "301"){
        console.log(`Vous avez choisi le ${Mode}`)
      } else {
        console.log(`Vous avez choisi le ${Mode}`)
      }
      randPlayers(TabPlayers);
      newGame();
    })
  })
});