# challenge-coodesh-backend-2021 🏅

## :bookmark: Índice

- [Introdução](#introducao)
- [Desafios](#desafios)
- [Tecnologias](#tecnologias)
- [Como Utilizar](#como-utilizar)

<a id="introducao"></a>

## :dart: Introdução

Este foi um desafio realizado para testar os meus conhecimentos em Back-end utilizando **Node.js**. 

<a id="desafios"></a>

## :fire: Desafios

Desenvolver uma API cujo database é alimentado dinamicamente, e oferecer rotas (CRUD) para acessar esses dados.
[Especificações](./especificacao/README.md) originais do desafio.

### Desafios Extras

- Executar o projeto usando `DOCKER`. ✅
- Escrever Unit Test para os endpoints da `REST API`. ✅
- Escrever um esquema de segurança utilizando `API KEY` nos endpoints. 🔨
- Descrever a documentação da API utilizando o conceito de `OPEN API 3.0`. 🔨

<a id="tecnologias"></a>

## :wrench: Tecnologias Utilizadas

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite](https://www.sqlite.org/index.html)
- [Jest](https://jestjs.io/pt-BR/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/docs/intro)

<a id="como-utilizar"></a>

## :rocket: Como Utilizar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Docker](https://www.docker.com/)** instalado na máquina.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/hrezend/challenge-coodesh-backend-2021
```

2. Executando a Aplicação:

```sh
  # Acessa o diretório da aplicação
  $ cd implementacao

  # Deixe o container rodando com as configurações do compose
  $ docker-compose up

  # Roda as migrations e cria o banco de dados
  $ npm run migration:run
```
Se tudo der certo, basta acessar http://localhost:3333/

Os endpoints da API são:
   - `GET /` - retorna informações da API
   - `GET /users` - lista as informações de todos os usuários da base de dados
   - `GET /users/:userId` - lista as informações de um usuário especificado no parâmetro
   - `PUT /users/:userId` - será responsável por receber atualizações dos dados para o usuário especificado no parâmetro
   - `DELETE /users/:userId`: - remove da base de dados o usuário especificado no parâmetro

---

<h4 align="center">
    made by <a href="https://www.linkedin.com/in/hrezend" target="_blank">hrezend</a>
    <br>
    challenge by <a href ="https://coodesh.com" target="_blank">coodesh</a>
</h4>