const express = require('express')
const app = express()
const usuarios = require('./api/routes/usuarios')
const personagens = require('./api/routes/personagens')
const classes = require('./api/routes/classes')
const itens = require('./api/routes/itens')
const mundos = require('./api/routes/mundos')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/usuarios', usuarios)
app.use('/personagens', personagens)
app.use('/classes', classes )
app.use('/itens', itens)
app.use('/mundos', mundos)

app.listen(8080, () => {
    console.log("API iniciada com sucesso!")
})
