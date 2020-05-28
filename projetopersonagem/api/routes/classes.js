const express = require('express')
const router = express.Router()
const Classe = require('../../models/classe')

router.get('/', async (req, res) => {
    try {
        var LIMITE = req.query.limit ? parseInt(req.query.limit) : 50
        var NOME_FILTER = req.query.nome ? {nome: req.query.nome} : {}
        var classes = await Classe.find(NOME_FILTER).limit(LIMITE)

        if(classes == ""){
            res.status(400).json({ error: 'Essa classe não existe!'});   
            return;
          }

            res.status(200).json(classes)
        
    } catch (error) {
     res.status(500).json({error: 'Não foi possivel encontar essa classe'})
    }
})

router.get('/:_id', async (req, res) => {
    try{
        var classe = await Classe.findOne({_id: req.params._id})

        if(classe == ""){
            res.status(400).json({ error: 'Essa Classe não existe!'});   
            return;
          }

       res.status(200).json(classe)
       
    } catch(error) {
      res.status(500).json({error: 'Não foi possivel encontar essa classe'})
    }
})

router.post('/', async (req, res) => {
    try{
      if (!req.body.nome){
        res.status(400).json({ error: 'Você deve informar o nome da classe!'});
        return; 
    }
    
      var nova_classe = await Classe.create(req.body) 

            res.status(200).json({nova_classe})
        
    } catch(error){
      res.status(500).json({error: 'Não foi possivel salvar essa classe'})
    }
})

router.delete('/:_id', async (req, res) => {
    try{
        var classe = await Classe.findByIdAndDelete(req.params._id)
          if(classe == null){
              res.status(400).json({ error: "Essa classe não existe!"})
              return
          }
          res.status(200).json({msg: 'classe excluido com sucesso!'})
      
    } catch(error){
      res.status(500).json({ error: "Não foi possivel deletar essa classe"})
    }
})

router.put('/:_id', async (req, res) => {
    try{
        var classe = await Classe.findByIdAndUpdate(req.params._id, req.body, {new: true});
            if(classe == null){
                res.status(400).json({error: "Não foi possivel atualizar essa classe"})
                return
            }
            res.status(200).json(classe)
        
    } catch(error){
       res.status(500).json({error: "Não foi possivel atualizar essa classe"})
    }
})

module.exports = router