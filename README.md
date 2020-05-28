Projeto Personagens 

Execute o comando npm install para instalar as depencias.
Execute o comando npm start para inicializar o servidor.

Recurso usuários 
-----------------

Para criar um novo usuário utilize a rota /usuarios

body para criar o novo usuário com o metodo post 
{
    "nome": "nome desejado",
    "senha": "senha desejado" 
}  

Para editar os campos do usuário utilize a rota /usuarios/_id
body do metodo PUT
{
    "nome": "novo nome",
    "senha": "nova senha" 
}  

Para lstar todos os usuários utilize a rota /usuarios
Para listar um usuário especifico utilize a rota /usuarios/_id
Para deletar um usuário utilieze a rota /usuarios/_id 

Para filtrar o usuário com o mesmo nome de usuário e com o limite de 5 usuários utileze a rota /usuarios?nome=nome do usuario?limit=5

Recurso classe
----------------

Para criar uma nova classe utilize a rota /classes
body para criar uma nova classe com o metodo post 
{
    "nome": "nome da classe"
}  

Para editar os campos da classe utilize a rota /classes/_id
body do metodo PUT
{
    "nome": "novo nome da classe"
}  

Para lstar todas as classes utilize a rota /classes
Para listar uma classe especifica utilize a rota /classes/_id
Para deletar uma classe utilieze a rota /classes/_id 

Para filtrar as classes com o mesmo nome e com o limite de 5 classes utileze a rota /classes?nome=nome da classe?limit=5

recurso item
---------------

Para criar um novo item utilize a rota /itens
body para criar um novo item com o metodo post 
{
    "nome": "nome do item",
    "dano": "dano"
}  

Para editar os campos do item utilize a rota /itens/_id
body do metodo PUT
{
    "nome": "novo nome do item",
    "dano": "novo dano do intem"
}  
Para lstar todos os itens utilize a rota /itens
Para listar um item especifico utilize a rota /itens/_id
Para deletar um item utilieze a rota /itens/_id 

Para filtrar os itens com o mesmo nome e com o limite de 5 itens utileze a rota /itens?nome=nome do item?limit=5

Recurso mundo
--------------

Para criar um novo mundo utilize a rota /mundos
body para criar um novo mundo com o metodo post 
{
    "nome": "nome do mundo",
    "regiao": "regiao"
} 
Para editar os campos do mundo utilize a rota /mundos/_id
body do metodo PUT
{
    "nome": "novo nome do mundo",
    "regiao": "nova regiao do mundo"
}  

Para lstar todos os mundos utilize a rota /mundos
Para listar um mundo especifico utilize a rota /mundos/_id
Para deletar um mundo utilieze a rota /mundos/_id 

Para filtrar os mundos com o mesmo nome e com o limite de 5 mundos utileze a rota /mundos?nome=nome do mundo?limit=5

Recurso Personagem
-------------------

Para criar um novo personagem utilize a rota /personagens
body para criar um novo personagem com o metodo post 
{
    "usuarioPersonagem": {
    	"_id": "_id do usuario"
    },
    "classePersonagem": {
    	"_id": "_id da classe"
    },
     "itemPersonagem": {
    	"_id": "_id do intem"
    },
     "mundoPersonagem": {
    	"_id": "_id do mundo"
    },
    "nome": "nome do personagem",
    "cor_cabelo": "cor cabelo",
    "altura": "altura"
}
Para editar os campos do personagem utilize a rota /personagens/_id
body do metodo PUT
"usuarioPersonagem": {
    	"_id": "novo _id do usuario"
    },
    "classePersonagem": {
    	"_id": "novo _id da classe"
    },
     "itemPersonagem": {
    	"_id": "novo _id do intem"
    },
     "mundoPersonagem": {
    	"_id": "novo _id do mundo"
    },
    "nome": "novo nome do personagem",
    "cor_cabelo": "nova cor cabelo",
    "altura": "nova altura"
}

Para lstar todos os personagens utilize a rota /personagens
Para listar um personagem especifico utilize a rota /personagens/_id
Para deletar um personagem utilieze a rota /personagens/_id 

Para filtrar os personagens com o mesma cor de cabelo e com o limite de 5 personagens utileze a rota /personagens?cor_cabelo=cor de cabelo?limit=5






