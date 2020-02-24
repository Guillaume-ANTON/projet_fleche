var inquirer = require('inquirer');
var Players = require ('../models/Players');


console.log('Engine lancé !!');

var nbPlayers = null;
var Mode = null;
var Players = null;
// var test = ['guigui', 'toto', 'ouioui']

function checkPlayersInStart (nombre) {
  if(nombre > 1 && nombre < 5) {
    return true;
  } else {
    return "Entrer un nombre compris entre 2 et 4";
  }
}

function randPlayers (Players){
  const randomElement = Players[Math.floor(Math.random() * Players.length)];
  console.log(randomElement)
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

var questionNomJoueurs = []

var choiceMode = [
  {
    type: 'list',
    name: 'modeGame',
    message: 'Choisisez le mode de jeux',
    choices: ['Tour du monde', '301', 'Cricket']

  }
]

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
      let Players = answers.namePlayers
      let players = new Players(answers[namePlayers]);
      console.log(players)
      console.log(Players)
  }
    inquirer.prompt(choiceMode).then(answers => {
      Mode = answers.modeGame
      console.log(Mode)
      randPlayers();
      if(Mode === 'Tour du monde'){
        console.log(`Vous avez choisi le ${Mode}`)
      } else if(Mode === "301"){
        console.log(`Vous avez choisi le ${Mode}`)
      } else {
        console.log(`Vous avez choisi le ${Mode}`)
      }
    })
  })
});



// Sélection du joueur qui commence en random 
// Function shoot