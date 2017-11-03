# gym-nodejs
Aplicação feita com NodeJS, Express e MongoDB responsável por armazenar informações referentes aos alunos de academias. Feito para a disciplina de Programação Back-end Avançada do curso de Especialização Web e Mobile - Full Stack.

## Alunos
O Projeto será executado pelos seguintes alunos:
1. Thiago Durante Pires ([@thdurante](https://github.com/thdurante))
2. Gabriel Louzada Rascovit ([@grascovit](https://github.com/grascovit))
3. Paulo de Oliveira Neto ([@pauloXtr3m](https://github.com/pauloXtr3m))

## Setup
Baixe o NodeJs no seguinte [link](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm "Get NPM")

Para baixar as dependências do projeto, rode:
```
$ npm install
```

## Run
Para rodar o projeto, execute:
```
$ npm start
```

## Rotas
O projeto, por padrão, roda na porta `:3003` e possui as seguintes rotas:
```
               Prefix Verb   URI Pattern                           Controller#Action
               people GET    /api/people(.:format)                 people#list
               people POST   /api/people(.:format)                 people#create
               people GET    /api/people/:id                       people#read
               people PUT    /api/people/:id(.:format)             people#update
               people DELETE /api/people/:id(.:format)             people#destroy
                 
```