const mongoose = require('mongoose') 

var url = "mongodb+srv://daniel:nirvana2020@personagens-nsnyc.mongodb.net/test?retryWrites=true&w=majority" 
var options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(url, options)

mongoose.connection.on('connected', () => {
    console.log("O mongoose conseguiu conectar ao mongodb!")
})

module.exports = mongoose