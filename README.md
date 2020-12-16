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


## :page_facing_up: Anotações

### Javascript

#### Importante
- Ao adicionar o type="module" o navegador tratara o script embutido ou externo como um módulo ECMAScript.
- Módulos são executados apenas uma vez por pagina, independente se você tiver varios imports.
- Ao contrário dos scripts regulares, os scripts de módulo (e suas importações) são buscados com CORS.
- Ao contrário dos scripts regulares, os scripts de módulos devem ser servidos com um dos tipos MIME JavaScript válidos, caso contrário, eles não serão executados. O padrão HTML recomenda text/javascript
```javascript
<script type="module">
  import {addTextToBody} from './utils.mjs';
  addTextToBody('Modules are pretty cool.');
</script>
```
- Ordem de execução do javascript pode ser controlada, abaixo ficara da seguinte ordem: 2.js,1.mjs,3.js. Os scripts de módulo se comportam como defer por padrão - não há como fazer um script de módulo bloquear o analisador HTML durante a busca, você pode usar defer para evitar o bloqueio, o que também atrasa a execução do script até que o documento tenha concluído a análise e mantém a ordem de execução com outros scripts adiados.
```javascript
<!-- Este script será executado após…  -->
<script type="module" src="1.mjs"></script>

<!-- … este script… -->
<script src="2.js"></script>

<!-- … mas antes deste script. -->
<script defer src="3.js"></script>
```
- Async funciona em módulos externos e embutidos, tal como acontece com os scripts normais, o async faz com que o script seja baixado sem bloquear o analisador HTML e executado o mais rápido possível.
```javascript
<!-- Isto é executado assim que suas importações forem obtidas-->
<script async type="module">
  import {addTextToBody} from './utils.mjs';

  addTextToBody('Inline module executed.');
</script>

<!-- Executa assim que & suas importações são obtidas -->
<script async type="module" src="1.mjs"></script>
```

#### Tudo é Objeto
- Tudo em Javascript é objeto (Todo objeto possui um protótipo, menos o null e o undefined (este não é um objeto)).
```javascript
// Objeto Literal
const menu = {
  selector: '.principal',
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add('active');
  },
};

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty('class'); // método herdado
```
```javascript
['10', '20', '30'].map(Number); // [10, 20, 30];
'JavaScript'.toUpperCase(); // JAVASCRIPT

const body = document.querySelector('body');
body.classList.add('js'); // adiciona JS ao Body
```

#### Arrow Function
- Função é criada na memoria logo de inicio(host), logo se eu chamo antes/apos a declaração da função ela sera executada.
- Uma função criada como uma expressão (Função anonima, aonde atribuimos uma função a uma variavel), tem uma diferença da função, precisa que a constante primeiro seja criada para depois permitir acesso, logo não pode chamar antes de declarar.
- A principal diferença da Arrow Function para uma função é o contexto do this. A arrow function não cria o próprio this, ela utiliza do pai e tambem tem sua sintaxe simplificada.
```javascript
const upperName = function (name) {
  return name.toUpperCase();
};
upperName('André'); // ANDRÉ

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName('Rafael'); // rafael

const countLetters = (word) => word.length;
countLetters('Rafael'); // 6
```

#### Destructuring
- É possivel desestruturar objetos e arrays.
```javascript
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

// Irá definir uma constante para cada propriedade
// dentro de event, que tiver o mesmo nome que a constante.
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

// Podemos desestruturar o parâmetro
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

document.documentElement.addEventListener('mousemove', handleMouseMove);
```
- Arrays
```javascript
const frutas = ['Banana', 'Uva'];
const [fruta1, fruta2] = frutas;
// fruta1 = banana
// fruta2 = Uva
```
```javascript
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, area] = useQuadrado;
```

#### Rest e Spread

Rest, quando uso ... eu pego todo o restante e coloco em um determinada variavel.
```javascript
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList('Google', 'André', 'Pedro', 'João');
```

- Spread, serve para espalhar os itens de um array, imagine que tem um array de numeros e quer descobrir qual é o maior, se usar a função Math.max(array) passando o array a função não vai entender, agora se usar o Spread e passar o mesmo array com ...array na frente ele vai passar um por um dos valores do array.
- Usado para somar um array em outro array, const array1 = [1,2], const array2 = [...array1, 3,4,5];, podemos colocar valores antes tambem.
- Pode ser utiliado em objetos.
```javascript
// Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
Math.max(...numeros); // retorna 20

// Transformar ArrayLike and Array
const items = document.querySelectorAll('li');

// items.map() não existe, agora [...items]
// é uma nova array, com cada elemento de items.
[...items].map((item) => (item.innerText = 'Teste'));

// Objetos
const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };
```

