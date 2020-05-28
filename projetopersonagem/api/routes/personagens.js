const express = require('express')
const router = express.Router()
const Personagem = require('../../models/personagem')

router.get('/', async (req, res) => {
    try {
        var LIMITE = req.query.limit ? parseInt(req.query.limit) : 5;
        var PERSONAGEM_FILTER = req.query.cor_cabelo ? {cor_cabelo: req.query.cor_cabelo} : {};

        var personagens = await Personagem.find(PERSONAGEM_FILTER).limit(LIMITE)

        if(personagens == ""){
            res.status(400).json({ error: 'Não existe personagem com essa cor de cabelo!'})
            return
        }else{

            res.status(200).json(personagens)
        }
        
    } catch (error) {
     res.status(500).json({error: 'Não foi possivel encontar o personagem'})
    }
})

router.get('/:_id', async (req, res) => {
    try{
        var personagem = await Personagem.findOne({_id: req.params._id}).populate('usuarioPersonagem')

        if(personagem == null){
            res.status(500).json({ error: 'Esse personagem não existe!'})
            return
        }

       res.status(200).json(personagem)

    } catch(error) {
      res.status(400).json({error: 'Não foi possivel encontar o personagem'})
    }
})

router.post('/', async (req, res) => {
    try{
        if (!req.body.nome){
            res.status(400).json({ error: 'Você deve informar o nome do personagem'});
            return; 
        }

        if (!req.body.cor_cabelo){
            res.status(400).json({ error: 'Você deve informar a cor do cabelo do personagem'});
            return; 
        }

        if (!req.body.altura){
            res.status(400).json({ error: 'Você deve informar a altura do personagem'});
            return; 
        }

        if (!req.body.usuarioPersonagem){
            res.status(400).json({ error: 'Você deve informar ID usuário do personagem'});
            return; 
        }
        if (!req.body.classePersonagem){
            res.status(400).json({ error: 'Você deve informar ID classe do personagem'});
            return; 
        }
        if (!req.body.itemPersonagem){
            res.status(400).json({ error: 'Você deve informar ID item do personagem'});
            return; 
        }
        if (!req.body.mundoPersonagem){
            res.status(400).json({ error: 'Você deve informar ID mundo do personagem'});
            return; 
        }

      var novo_personagem = await Personagem.create(req.body) 

            res.status(200).json({novo_personagem})
        
    } catch(error){
      res.status(500).json({error: 'Não foi possivel salvar esse personagem'})
    }
})

router.delete('/:_id', async (req, res) => {
    try{
        var personagem = await Personagem.findByIdAndDelete(req.params._id)
          if(personagem == null){
              res.status(400).json({ error: "Esse personagem não existe!"})
              return
          }
          res.status(200).json({msg: 'usuário excluido com sucesso!'})
      
    } catch(error){
      res.status(500).json({ error: "Não foi possivel deletar esse personagem"})
    }
})

router.put('/:_id', async (req, res) => {
    try{
        var personagem = await Personagem.findByIdAndUpdate(req.params._id, req.body, {new: true});
            if(personagem == null){
                res.status(400).json({error: "Não foi possivel atualizar esse personagem"})
                return
            }
            res.status(200).json(personagem)
        
    } catch(error){
       res.status(500).json({error: "Não foi possivel atualizar esse personagem"})
    }
})

module.exports = router