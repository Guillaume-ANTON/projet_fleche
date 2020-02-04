var inquirer = require('inquirer');

console.log('Engine lancé !!');

var nbPlayers = null;

function checkPlayersInStart (nombre) {
  if(nombre > 1 && nombre < 5) {
    return true;
  } else {
    return "Entrer un nombre compris entre 2 et 4";
  }
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

var questionNomJoeurs = []

inquirer.prompt(questionJoueurs).then(answers => {
  nbPlayers = answers.nbPlayers;
  for (var i = 0; i < nbPlayers; i++) {
    questionNomJoeurs.push({
      type: 'input',
      name: 'namePlayers'+(i+1),
      message: 'Entrer le nom du joueur'+(i+1)
    })
  }
  inquirer.prompt(questionNomJoeurs).then(answers => {
    console.log(answers)
    for (var namePlayers in answers) {
    }
  })
});





