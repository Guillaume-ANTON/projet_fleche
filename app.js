const basse = require('./db')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 9012
const router = require('./router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))
app.set('views', './views')
app.set('engine','./engine')
app.set('view engine', 'hbs')

app.use(router)

app.listen(port, () => console.log('Le serveur écoute sur le port ' + port))