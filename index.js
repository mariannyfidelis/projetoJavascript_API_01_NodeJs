const express = require('express');

//console.log(express)

const server = express();

server.get('/curso', (request, response) => {
    console.log("Acessou");
    
    //Retorno de mensagem simples
    //return response.send("Hello Marianny");

    //Retorno de um Json
    return response.json({"user": 'Maria', "idade": 20});
});

server.listen(3000);


//Query Params ==> São parâmetros que passamos na rota do seguinte modo: ?nome=Fulano

//Route Params ==> São parâmetros que passamos na rota do seguinte modo: /curso/2

//Request Body ==> Objeto que passamos com informações para a requisição