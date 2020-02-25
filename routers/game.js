const router = require('express').Router()

router.get('/:id', (req, res, next) => {
  res.send(req.url)
})

module.exports = router




// const router = require('express').Router()

// router.get('/players', (req, res, next) => {  
//   console.log('Affiche les players');
// })

// router.post('/players', (req, res, next) => {
//   console.log('Création d un nouveau joueur')
// })

// router.get('/players/new', (req, res, next) => {
//   console.log('Affiche un formulaire de création de joueur')
// })

// router.get('/players/:id', (req, res, next) => {
//   console.log('Retourne le joueur en fonction de l id')
// })

// router.get('/players/{id}/edit', (req, res, next) => {
//   console.log('Affiche un formulaire de création de player')
// })

// router.patch('/players/{id}', (req, res, next) => {
//   console.log('Permet d éditer un utilisateur')
// })

// router.delete('/players/{id}', (req, res, next) => {
//   console.log('Permet de supprimer un utilisateur')
// })

// router.get('/games', (req, res, next) => {
//   console.log('Permet d éditer un utilisateur')
// })

// router.get('/games/new', (req, res, next) => {
//   console.log('Affiche un formulaire de création de partie')
// })

// router.post('/games', (req, res, next) => {
//   console.log('Création d un nouvelle game')
// })

// router.get('/games/{id}', (req, res, next) => {
//   console.log('Affiche une game en fonction de son id')
// })

// router.get('/games/{id}/edit', (req, res, next) => {
//   console.log('Affiche le formulaire d édition de partie')
// })

// router.patch('/games/{id}', (req, res, next) => {
//   console.log('Permet d éditer le nom et mode de jeu d une game non démarrée')
// })

// router.delete('/games/{id}', (req, res, next) => {
//   console.log('Permet de supprimer une partie')
// })

// router.get('/games/{id}/players', (req, res, next) => {
//   console.log('Affiche les players de la partie avec l id')
// })

// router.post('/games/{id}/players', (req, res, next) => {
//   console.log('Permet d ajouter un ou plusieurs joueurs à une partie non démarrée')
// })

// router.delete('/games/{id}/players', (req, res, next) => {
//   console.log('Permet de supprimer un ou plusieurs joueurs d une partie non démarrée')
// })

// router.post('/games/{id}/shots', (req, res, next) => {
//   console.log('Lorsqu un tir sur la cible est réalisé')
// })



// module.exports = router