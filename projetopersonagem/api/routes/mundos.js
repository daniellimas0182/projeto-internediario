const express = require('express')
const router = express.Router()
const Mundo = require('../../models/mundo')

router.get('/', async (req, res) => {
    try {
        var LIMITE = req.query.limit ? parseInt(req.query.limit) : 5
        var NOME_FILTER = req.query.nome ? {nome: req.query.nome} : {}
        var mundos = await Mundo.find(NOME_FILTER).limit(LIMITE)

        if(mundos == ""){
            res.status(400).json({ error: 'Esse mundo não existe!'});   
            return;
          }
            res.status(200).json(mundos)

    } catch (error) {
     res.status(500).json({error: 'Não foi possivel encontar esse mundo'})
    }
})

router.get('/:_id', async (req, res) => {
    try{
        var mundo = await Mundo.findOne({_id: req.params._id})

        if(mundo == ""){
            res.status(400).json({ error: 'Esse mundo não existe!'});   
            return;
          }

       res.status(200).json(mundo)
       
    } catch(error) {
      res.status(500).json({error: 'Não foi possivel encontar esse mundo'})
    }
})

router.post('/', async (req, res) => {
    try{
      if (!req.body.nome){
        res.status(400).json({ error: 'Você deve informar o nome do mundo!'});
        return; 
    }

    if (!req.body.regiao){
      res.status(400).json({ error: 'Você deve informar a região do mundo!'});
      return; 
  }
      var novo_mundo = await Mundo.create(req.body) 

            res.status(200).json({novo_mundo})
        
    } catch(error){
      res.status(500).json({error: 'Não foi possivel salvar esse mundo'})
    }
})

router.delete ('/:_id', async (req, res) => {
    try{
        var mundo = await Mundo.findByIdAndDelete(req.params._id)
          if(mundo == null){
              res.status(400).json({ error: "Esse mundo não existe"})
              return
          }
          res.status(200).json({msg: 'Mundo excluido com sucesso!'})
      
    } catch(error){
      res.status(500).json({ error: "Não foi possivel deletar esse mundo"})
    }
})

router.put('/:_id', async (req, res) => {
    try{
        var mundo = await Mundo.findByIdAndUpdate(req.params._id, req.body, {new: true});
            if(mundo == null){
                res.status(400).json({error: "Não foi possivel atualizar esse mundo"})
                return
            }
            res.status(200).json(mundo)
        
    } catch(error){
       res.status(500).json({error: "Não foi possivel atualizar esse mundo"})
    }
})

module.exports = router
