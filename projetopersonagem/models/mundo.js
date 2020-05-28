const mongoose = require('../api/data')

var mundoScheme =new mongoose.Schema({
    'nome': String,
    'regiao': String,
})

var Mundo = mongoose.model('Mundo', mundoScheme)

module.exports = Mundo