const mongoose = require('../api/data')


var itemScheme = new mongoose.Schema({
    'nome': String,
    'dano': String
})

var Item = mongoose.model('Item', itemScheme)

module.exports = Item