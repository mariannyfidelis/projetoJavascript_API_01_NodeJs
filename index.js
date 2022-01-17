const express = require('express');
const server = express();
server.use(express.json());

const cursos = ['Python', 'NodeJS', 'Flutter', 'Insomnia']

// Query Params ==> São parâmetros que passamos na rota do seguinte modo: ?nome=Fulano
// Exemplos Query Params - http://localhost:3000/curso?nome=Joana&idade=30
server.get('/curso', (request, response) => {
    const nome = request.query.nome;
    const idade = request.query.idade;

    //Retorno de um Json
    return response.json({"nome": `${nome}`, "idade": `${idade}`});
});

//Middleware Global
//Criando um middleware que servirá como camada de tratamento intermediário dos dados
server.use((request, response, next) => {
    //Como não há hora o middleware tratará qualquer rota !
    console.log(`Requisição chamada na URL: ${request.url}`);

    return next();
});

//Vamos criar uma função de middleware para tratamento nas requisições;
function checkCurso(request, response, next) {
    if(!request.body.nomeDoCurso){
        return response.status(404).json({"mensagem_erro": "Requisição errada e sem nome."});
    }
    return next();
}

function checkIndexCurso(request, response, next) {
    const curso = cursos[request.params.index];

    if(!curso){
        return response.status(404).json({"mensagem_erro": "Requisição errada e sem índice válido"});
    }

    request.curso = cursos
    return next();
}

server.get("/cursos", (request, response)=>{

    return response.json(cursos);
});
//Route Params ==> São parâmetros que passamos na rota do seguinte modo: /curso/2
server.get("/curso/:index", (request, response) => {
    const index = request.params.index;

    return response.json({"id": `${index}`});
});

server.get('/cursos/:index', checkIndexCurso, (request, response) => {

    const indexEnviado = request.params.index;

    return response.json({"id": request.params.index, "cursoEscolhido": cursos[indexEnviado]});
    //return response.json(cursos[indexEnviado]);
});

//Vamos criar requisições do tipo POST - Inserir dados
server.post("/cursos", checkCurso,(request, response) => {
    //Utilizando o Request body, ou seja enviando um JSON com os dados no body
    const { nomeDoCurso } = request.body;
    
    //Adicionando na lista
    cursos.push(nomeDoCurso);
    response.json(cursos);
});

//Vamos criar requisições do tipo POST PUT - Atualizar dados
server.put("/cursos/:index", checkCurso, checkIndexCurso, (request, response) => {
    const indexEnviado = request.params.index;
    const { nomeDoCurso } = request.body;
    cursos[indexEnviado] = nomeDoCurso;
    
    return response.json(cursos);

});

//Vamos criar requisições do tipo DELETE - Deletar dados
server.delete('/cursos/:index', (request, response) => {

    const { index } = request.params;

    cursos.splice(index, 1);

    return response.json({"msg": "Curso deletado com sucesso ! ", "cursos": cursos});
});

//O servidor ouvirá na porta 3333
server.listen(3333);

//Request Body ==> Objeto que passamos com informações para a requisição
