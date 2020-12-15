<h1 align="center">
    <img alt="Dogs" title="logo" src="github/logo.svg" width="35%" />
</h1>

<h2 align="center">
  :rocket: Projeto Dogs
</h2>

<p align="center">
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar-?">Como usar ?</a>
</p>

<p align="center">
  <img alt="Dogs" src="github/dog.png" width="80%">
</p>

## :computer: Projeto

<strong>Projeto Dogs</strong> é um projeto parecido com o instagram, aonde é permitido postar fotos de <strong>cachorros.</strong>

O projeto é um sistema de rede social, aonde é possivel adicionar fotos, visualizar as fotos, postar comentarios, criar usuarios, autenticar, obter estatisticas, sair do sistema entre outras ações, tudo criado totalmente do <i>zero.<i>

## :rocket: Tecnologias

### Back-End (NodeJS)

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/version3.html)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [Jest](https://jestjs.io/pt-BR/)
- [Cross-Env](https://www.npmjs.com/package/cross-env)
- [Supertest](https://www.npmjs.com/package/supertest)

#### Comandos Back-End (NodeJS)

```bash
$ yarn init -y (start project)
$ yarn add express (framework)
$ node index.js (start application)
$ yarn add nodemon -D (Reload application)
$ yarn add knex (Query Builder)
$ yarn add sqlite3 (Database)
$ npx knex migrate:make create_ongs (create migrations)
$ npx knex migrate:latest (execute migrations)
$ npx knex (list commands knex)
$ yarn add celebrate (validation - integrates validation with express)
$ yarn add jest (TDD)
$ npx jest --init (Execute init jest)
$ yarn add cross-env (Run scripts that set and use environment variables across platforms)
$ yarn add supertest (Test Request)
$ npm test (Execute Test)
```

### Front-End (ReactJS)

- [React](https://reactjs.org)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Axios](https://www.npmjs.com/package/axios)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Intl](https://www.npmjs.com/package/intl)

### Comandos Front-End (ReactJS)

```bash
$ npx create-react-app frontend  (start project)
$ yarn start  (start application)
$ cleaning project src(README.md, App.css, App.test.js, index.css, logo.svg, serviceWorker.js, setupTests.js)
$ cleaning project public(robots.txt, manigest.json, logo512.png, logo192.png)
$ yarn add react-icons (Icons)
$ yarn add react-router-dom (Routes)
$ yarn add axios (Connect backend - Client HTTP)
```

## :information_source: Como usar ?

### Back-End NodeJS

- Instale as dependencias: npm install / yarn
- Execute a aplicação: npm start / yarn start
- Teste: npm test

### Front-End ReactJS

- Instale as dependencias: npm install / yarn
- Execute a aplicação: npm start / yarn start
