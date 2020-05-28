const express = require('express')
const router = express.Router()
const Usuario = require('../../models/usuario')


router.get('/', async (req, res) => {
    try {
        var LIMITE = req.query.limit ? parseInt(req.query.limit) : 50
        var NOME_FILTER = req.query.nome ? {nome: req.query.nome} : {}
        var usuarios = await Usuario.find(NOME_FILTER).limit(LIMITE)

        if(usuarios == ""){
            res.status(400).json({ error: 'Esse usuário não existe!'});   
            return;
          }
        
            res.status(200).json(usuarios)
        
    } catch (error) {
     res.status(500).json({error: 'Não foi possivel encontar o usuário', motivo: error.message})
    }
});

router.get('/:_id', async (req, res) => {
    try{
        var usuario = await Usuario.findOne({_id: req.params._id})

        if(usuario == ""){
            res.status(400).json({ error: 'Esse usuário não existe!'});   
            return;
          }

       res.status(200).json(usuario)
    
    } catch(error) {
      res.status(500).json({error: 'Não foi possivel encontar o usuário'})
    }
});

router.post('/', async (req, res) => {
    try{
        if (!req.body.nome){
            res.status(400).json({ error: 'Você deve informar o nome do usuário'});
            return; 
        }

        if (!req.body.senha){
            res.status(400).json({ error: 'Você deve informar a senha do usuário'});
            return; 
        }

      var novo_usuario = await Usuario.create(req.body) 

            res.status(200).json({novo_usuario})
        
    } catch(error){
      res.status(500).json({error: 'Não foi possivel salvar esse usuário'})
    }
});

router.delete('/:_id', async (req, res,) => {
    try{
      var usuario = await Usuario.findByIdAndDelete(req.params._id)
          if(usuario == null){
              res.status(400).json({ error: "Esse usuario não existe!"})
              return
          }
          res.status(200).json({msg: 'usuário excluido com sucesso!'})
    
    } catch(error){
      res.status(500).json({ error: "Não foi possivel deletar esse usuário"})
    }
});

router.put('/:_id', async (req, res) => {
    try{
        var usuario = await Usuario.findByIdAndUpdate(req.params._id, req.body, {new: true});
            if(usuario == null){
                res.status(400).json({error: "Não foi possivel atualizar esse usuário"})
                return
            }
            res.status(200).json(usuario)
        
    } catch(error){
       res.status(500).json({error: "Não foi possivel atualizar esse usuário"})
    }
});

module.exports = router
