# Passos

## 1. Instalação do Node

1. Crie um arquivo __index.js__ ou Acompanhe o arquivo index.js para a criação do nosso servidor.
2. Para executar o __index.js__ sempre utilize o comando __```node index.js```__.
3. Sempre que alterar o arquivo __index.js__ utilize esse comando para restartar o servidor. Posteriormente utilizaremos o módulo/package nodemon que manterá o servidor sempre ativo.
4. Quando instalar o nodemon este poderá ser executado de duas maneiras (leia seção sobre o nodemon a seguir).

## 2. Instruções iniciais

1. Criar um diretório no local de sua preferência.
2. Abrir o terminal no diretório escolhido.
3. Inserir o comando __```yarn init -Y ```__ ou __```npm init -Y ```__.
4. Verifique se o arquivo package.json foi criado.
5. Instale o express __```yarn add express```__.
6. Verifique se a pasta node_modules foi criada. Esta pasta será responsável por todos os módulos utilizados no seu projeto.
7. Para seguir os passos faça o download do projeto no Github __projetojavascript_api__ e acompanhe com as versões criadas o passo a passo.
8. Para acompanhar utilize o comando __```git checkout nome_versão```__ [v1.0, v2.0, v3.0] e assim por diante.


## 3. Comandos adicionais

9. __```yarn add nodemon -D```__.  O nodemon será utilizando para restartar sempre o servidor

## 4. Nodemon

10. Depois de instalado você poderá usar o nodemon de duas maneiras:
    1.  Pelo terminal por meio do comando __```nodemon index.js```__.
    2.  Ou, pelo script de configuração inserido no __package.json.__ para visualizar leia o __package.json__. E no terminal digite o comando __```yarn dev index.js```__.
