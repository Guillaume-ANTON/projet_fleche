// var inquirer = require("inquirer");
// const checkPlayersInStart = require('./checkPlayersInStart');
// const boucleNamePlayers = require ('./boucleNamePlayers');

// console.log("Bienvenue chez Guillaume")

// var nombredejoueurs = []
// var nomsjoueurs = []

// class Game {
//   selectJoueurs() {
//     inquirer
//       .prompt([
//         {
//         type: 'input',
//         message: 'Entrer le nombre de joueur ',
//         name: 'nbPlayers',
//         default: '2',
//         validate: checkPlayersInStart,
//         }
//       ])
//       .then(answers => {
//         nombredejoueurs.push(answers.nbPlayers)
//         console.log('Vous avez renseigner', nombredejoueurs, 'joueurs');
//       })
//   }
//   selectNameJoueurs() {
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         message: 'Entrer le nom des joueurs',
//         name: 'namePlayers',
//       }
//     ])
//     .then(answers => {
//       nomsjoueurs.push(answers.namePlayers)
//       console.log(nomsjoueurs)
//     })
//   }
//   // lancerFlechette(){
//   //   inquirer
//   //   .prompt([
//   //     {
//   //       type: 'input',
//   //         name: 'fleche1',
//   //         message: 'Entrer le nombre que vous voulez faire :',
//   //     },
//   //     {
//   //       type: 'input',
//   //         name: 'fleche2',
//   //         message: 'Score du joueur',
//   //     },
//   //     {
//   //       type: 'input',
//   //         name: 'fleche3',
//   //         message: 'Entrer le nombre que vous voulez faire :',
//   //     },
//   //   ])
//   // }

//   run() {
//     this.selectJoueurs();
//     this.selectNameJoueurs();
//   }
// }

// const test = new Game()
// test.run()







// // var inquirer = require("inquirer");

// // console.log("Bienvenue chez Guillaume")

// // var nombredejoueurs = 0

// // var selectplayers = [
// //   {
// //     type: 'input',
// //     message: 'Entrer le nombre de joueur ',
// //     name: 'nbPlayers',
// //     default: '2',
// //   }
// // ]

// // class Game {
// //   selectJoueurs() {
// //     inquirer.prompt(selectplayers).then(answers => {
// //         nombredejoueurs.push(answers.nbPlayers)
// //         console.log('Vous avez renseigner', nombredejoueurs, 'joueurs');
// //       })
// //   }
// //   lancerFlechette(){
// //     inquirer
// //     .prompt([
// //       {
// //         type: 'input',
// //           name: 'fleche1',
// //           message: 'Entrer le nombre que vous voulez faire :',
// //       },
// //       {
// //         type: 'input',
// //           name: 'fleche2',
// //           message: 'Score du joueur',
// //       },
// //       {
// //         type: 'input',
// //           name: 'fleche3',
// //           message: 'Entrer le nombre que vous voulez faire :',
// //       },
// //     ])
// //   }

// //   run() {
// //     this.selectJoueurs(this.lancerFlechette);
// //   }
// // }

// //   // testNumber(nombre) {
// //   //   if(nombre < 1 && nombre >9) {
// //   //     return "yes";
// //   //   } else {
// //   //     return "no";
// //   //   }
// //   // }

// // const test = new Game()
// // test.run()