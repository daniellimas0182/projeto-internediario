const mongoose = require('../api/data')


var usuarioScheme = new mongoose.Schema({
    'nome': String,
    'senha': String,
    'criadoEm': { type: Date, default: Date.now },
})

var Usuario = mongoose.model('Usuario', usuarioScheme)

module.exports = Usuario