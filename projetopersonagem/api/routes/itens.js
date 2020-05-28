const express = require('express')
const router = express.Router()
const Item = require('../../models/item')

router.get('/', async (req, res) => {
    try {
        var LIMITE = req.query.limit ? parseInt(req.query.limit) : 50
        var NOME_FILTER = req.query.nome ? {nome: req.query.nome} : {}
        var itens = await Item.find(NOME_FILTER).limit(LIMITE)

        if(itens == ""){
            res.status(400).json({ error: 'Esse item não existe!'});   
            return;
          }

            res.status(200).json(itens)
        
    } catch (error) {
     res.status(500).json({error: 'Não foi possivel encontar o item'})
    }
})

router.get('/:_id', async (req, res) => {
    try{
        var item = await Item.findOne({_id: req.params._id})

        if(item == null){
            res.status(400).json({ error: 'Esse item não existe!'});   
            return;
          }

       res.status(200).json(item)
       
    } catch(error) {
      res.status(500).json({error: 'Não foi possivel encontar o item'})
    }
})

router.post('/', async (req, res) => {
    try{
      if (!req.body.nome){
        res.status(400).json({ error: 'Você deve informar o nome do item!'});
        return; 
    }
    if (!req.body.dano){
      res.status(400).json({ error: 'Você deve informar o dano do item!'});
      return; 
  }
      var novo_item = await Item.create(req.body) 

            res.status(200).json({novo_item})
        
    } catch(error){
      res.status(500).json({error: 'Não foi possivel salvar esse item'})
    }
})

router.delete('/:_id', async (req, res) => {
    try{
        var item = await Item.findByIdAndDelete(req.params._id)
          if(item == null){
              res.status(400).json({ error: "Esse item não existe"})
              return
          }
          res.status(200).json({msg: 'Item excluido com sucesso!'})
      
    } catch(error){
      res.status(500).json({ error: "Não foi possivel deletar esse item"})
    }
})

router.put('/:_id', async (req, res) => {
    try{
        var item = await Item.findByIdAndUpdate(req.params._id, req.body, {new: true});
            if(item == null){
                res.status(400).json({error: "Não foi possivel atualizar esse item"})
                return
            }
            res.status(200).json(item)
        
    } catch(error){
       res.status(500).json({error: "Não foi possivel atualizar esse item"})
    }
})

module.exports = router