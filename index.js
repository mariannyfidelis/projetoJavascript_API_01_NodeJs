const express = require('express');
const server = express();

// Query Params ==> São parâmetros que passamos na rota do seguinte modo: ?nome=Fulano
// Exemplos Query Params - http://localhost:3000/curso?nome=Joana&idade=30
server.get('/curso', (request, response) => {
    const nome = request.query.nome;
    const idade = request.query.idade;

    //Retorno de um Json
    return response.json({"nome": `${nome}`, "idade": `${idade}`});
});

const cursos = ['Python', 'NodeJS', 'Flutter', 'Insomnia']
//Route Params ==> São parâmetros que passamos na rota do seguinte modo: /curso/2
server.get("/curso/:id", (request, response) => {
    const id = request.params.id;

    return response.json({"id": `${id}`});
});

server.get('/cursos/:id', (request, response) => {

    const indexEnviado = request.params.id;

    return response.json({"id": request.params.id, "cursoEscolhido": cursos[indexEnviado]});
    //return response.json(cursos[indexEnviado]);
});

server.listen(3000);



//Request Body ==> Objeto que passamos com informações para a requisição