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

server.get("/cursos", (request, response)=>{

    return response.json(cursos);
});
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

//Vamos criar requisições do tipo POST - Inserir dados
server.post("/cursos", (request, response) => {
    //Utilizando o Request body, ou seja enviando um JSON com os dados no body
    const { nomeDoCurso } = request.body;
    
    //Adicionando na lista
    cursos.push(nomeDoCurso);
    response.json(cursos);
});

//Vamos criar requisições do tipo POST PUT - Atualizar dados
server.put("/cursos/:index", (request, response) => {
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



server.listen(3000);

//Request Body ==> Objeto que passamos com informações para a requisição
