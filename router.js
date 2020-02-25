const gameRouter = require('./routers/game')
const router = require('express').Router()
const Players = require('./models/Players')
const Games = require('./models/Game')


// Routes
router.use('/games', gameRouter)

// Redirection
router.all('/', (req, res, next) => {
    res.format({
        html : () => {
            res.redirect(301, '/games')
        },
        json : () => {
            res.status(406).send('API_NOT_AVAILABLE')
        }
    })
})

// Players

router.get('/players', (req, res, next) => {
    Players.getPlayers()
    .then((Players) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>ID</th><th>Name</th><th>Email</th></tr>'
              Object.values(Players).forEach((Players) => {
                content += '<tr>'
                content += '<td>' + Players['id'] + '</td>'
                content += '<td>' + Players['name'] + '</td>'
                content += '<td>' + Players['email'] + '</td>'
                content += '<td> <form action="/players/'+Players['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Edit</button> </form> </td>'
                content += '<td> <form action="/players/delete/'+Players['id']+'/?_method=POST", method="POST"> <button type="submit" class="btn btn-danger"><i class="fa fa-trash-o fa-lg mr-2"></i>Remove</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("playyers", {
                  content: content
              })
            },
            json: () => {
                res.json(Players)
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.post('/players', (req, res, next) => {
    Players.insertPlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/players/:id')
        },
        json : () => {
            res.status(201).send(Players)
        }
    })
})

router.delete('/players/:id', (req, res, next) => {
    Players.deletePlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/players')
        },
        json : () => {
            res.status(410).send('PLAYER_NOT_DELETABLE')
        }
    })
})

router.get('/players/new', (req, res, next) => {
    Players.getPlayers()
    .then((Games) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>Formulaire de création de joueur</th></tr>'
              Object.values(Games).forEach((Games) => {
                content += '<tr>'
                content += '<td> <label for="name">Nom </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <label for="name">email </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <form action="/players/'+Players['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Submit</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("form_new_players", {
                  content: content
              })
            },
            json: () => {
                res.status(406).send('API_NOT_AVAILABLE')
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.get('/players/:id', (req, res, next) => {
    Players.getPlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/players/:id/edit')
        },
        json : () => {
            res.json(Players)
        }
    })
})

router.get('/players/:id/edit', (req, res, next) => {
    Players.getPlayers()
    .then((Players) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>Formulaire de création de joueur</th></tr>'
              Object.values(Players).forEach((Players) => {
                content += '<tr>'
                content += '<td> <label for="name">Nom </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <label for="name">email </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <form action="/players/'+Players['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Submit</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("form_new_game", {
                  content: content
              })
            },
            json: () => {
                res.status(406).send('API_NOT_AVAILABLE')
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.patch('/players/:id', (req, res, next) => {
    Players.deletePlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/players')
        },
        json : () => {
            res.status(200).send(Players)
        }
    })
})

router.delete('/players/:id', (req, res, next) => {
    Players.deletePlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/players')
        },
        json : () => {
            res.status(200).send(Players)
        }
    })
})

// Games

router.get('/games/', (req, res, next) => {
    Players.getGame()
    .then((Games) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>ID</th><th>Mode</th><th>Name</th><th>status</th><th>Date</th></tr>'
              Object.values(Games).forEach((Games) => {
                content += '<tr>'
                content += '<td>' + Games['id'] + '</td>'
                content += '<td>' + Games['mode'] + '</td>'
                content += '<td>' + Games['name'] + '</td>'
                content += '<td>' + Games['status'] + '</td>'
                content += '<td>' + Games['createdAt'] + '</td>'
                content += '<td> <form action="/games/'+Games['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Accéder</button> </form> </td>'
                content += '<td> <form action="/games/delete/'+Games['id']+'/?_method=POST", method="POST"> <button type="submit" class="btn btn-danger"><i class="fa fa-trash-o fa-lg mr-2"></i>Supprimer</button> </form> </td>'
                content += '<td> <form action="/players/? _method=GET", method="GET"> <button type="submit" class="btn btn-danger"><i class="fa fa-trash-o fa-lg mr-2"></i>Gérer les joueurs</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("gammes", {
                  content: content
              })
            },
            json: () => {
                res.json(Games)
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.get('/games/new', (req, res, next) => {
    Players.newGame()
    .then((Games) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>Formulaire de création de partie</th></tr>'
              Object.values(Games).forEach((Games) => {
                content += '<tr>'
                content += '<td> <label for="name">Nom </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <select name="mode" size="1"><option>Tour du monde<option>301<option>Cricket</select> </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <form action="/games/'+Games['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Submit</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("form_new_game", {
                  content: content
              })
            },
            json: () => {
                res.status(406).send('API_NOT_AVAILABLE')
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.post('/games', (req, res, next) => {
    Players.newGame(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/games/:id')
        },
        json : () => {
            res.status(201).send(Games)
        }
    })
})

router.get('/games/:id' , (req, res, next) => {
    res.render("Route ok")
})

router.get('/games/:id/edit', (req, res, next) => {
    Players.newGame()
    .then((Games) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>Formulaire de création de partie</th></tr>'
              Object.values(Games).forEach((Games) => {
                content += '<tr>'
                content += '<td> <label for="name">Nom </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <select name="mode" size="1"><option>Tour du monde<option>301<option>Cricket</select> </td>'
                content += '<td> <input type="text" id="name" name="name"> </form> </td>'
                content += '<td> <form action="/games/'+Games['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Submit</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("form_new_game", {
                  content: content
              })
            },
            json: () => {
                res.status(406).send('API_NOT_AVAILABLE')
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.patch('/games/:id', (req, res, next) => {
    Players.newGame(req.body)
    res.format({
        html : () => {
            res.redirect(200, '/games/:id')
        },
        json : () => {
            res.status(200).send(Games)
        }
    })
})

router.delete('/games/:id', (req, res, next) => {
    Players.deleteGame(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/games/')
        },
        json : () => {
            res.status(204).send('Pas de body')
        }
    })
})

router.get('/games/:id/players', (req, res, next) => {
    Players.getGame()
    .then((Games) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>ID</th><th>Name</th><th>Email</th></tr>'
              Object.values(Games).forEach((Games) => {
                content += '<tr>'
                content += '<td>' + Players['id'] + '</td>'
                content += '<td>' + Players['name'] + '</td>'
                content += '<td>' + Players['email'] + '</td>'
                content += '<td> <form action="/games/'+Players['id']+'/player ?_method="POST", method="POST"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Ajouter à la partie</button> </form> </td>'
                content += '<td> <form action="/games/'+Players['id']+'/players ?_method="DELETE", method="DELETE"> <button type="submit" class="btn btn-danger"><i class="fa fa-trash-o fa-lg mr-2"></i>Supprimer de la partie</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("gammes", {
                  content: content
              })
            },
            json: () => {
                res.json(Games)
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.post('/games/:id/players', (req, res, next) => {
    Players.insertPlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/games/:id/players')
        },
        json : () => {
            res.status(204).send('Pas de body')
        }
    })
})

// Gestion des errreurs
router.use((err, req, res, next) => {
    res.format({
        html: () => {
            res.render('error', {
                error: err
            })
            
        },
        json : () => {
            res.status(404).json(err)
        }
    })
})

// const router = require('express').Router()
// const gameRouter = require('./routers/game.js')

// router.use('/players', gameRouter)
// router.use('/players/new', gameRouter)
// router.use('/players/{id}', gameRouter)
// router.use('/players/{id}/edit', gameRouter)
// router.use('/games', gameRouter)
// router.use('/games/new', gameRouter)
// router.use('/games/{id}', gameRouter)
// router.use('/games/{id}/edit', gameRouter)
// router.use('/games/{id}/players', gameRouter)
// router.use('/games/{id}/shots', gameRouter)

module.exports = router;