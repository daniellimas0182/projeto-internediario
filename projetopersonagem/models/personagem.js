const mongoose = require('../api/data')
const Usuario = require('../models/usuario')
const Classe = require('../models/classe')
const Item = require('../models/item')
const Mundo = require('../models/mundo')

var personagemScheme = new mongoose.Schema({
     
    usuarioPersonagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'

    },
    classePersonagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classe'
    },
    itemPersonagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    mundoPersonagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    'nome': String, 
    'cor_cabelo': String,
    'altura': String,
})

var Personagem = mongoose.model('Personagem', personagemScheme)

module.exports = Personagem
