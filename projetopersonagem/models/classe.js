const mongoose = require('../api/data')


var classeScheme = new mongoose.Schema({
    'nome': String,
})

var Classe = mongoose.model('Classe', classeScheme)

module.exports = Classe