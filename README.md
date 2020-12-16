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

#### Intrudução

O ES6 seria uma nova maneira de fazer os processos no javascript, ou seja, não faz nada novo, não são novas funcionalidades, apenas reformulou a forma de chegar ao resultado final, por isso é possível sua conversão com o babel, um exemplo de implementação do ES6 é a possibilidade de trabalhar com classes de forma nativa no javascript. Como alguns navegadores não entende o ES6 usamos o babel para converte as sintaxes em função, garantindo assim que todos os navegadores entenda o código.

#### Modules

- Ao adicionar o type="module" o navegador tratara o script embutido ou externo como um módulo ECMAScript.
- Módulos são executados apenas uma vez por pagina, independente se você tiver varios imports.
- Ao contrário dos scripts regulares, os scripts de módulo (e suas importações) são buscados com CORS.
- Ao contrário dos scripts regulares, os scripts de módulos devem ser servidos com um dos tipos MIME JavaScript válidos, caso contrário, eles não serão executados. O padrão HTML recomenda text/javascript
- Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.
  -Só funciona em servidor, seja local ou online Não irá funcionar se você abrir o html direto, porque usa http/https.

```javascript
<script type="module">
  import {addTextToBody} from './utils.mjs'; addTextToBody('Modules are pretty
  cool.');
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

#### HTMLElement

- Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

```javascript
const h1 = document.querySelectory("h1");
Object.prototype.toString.call(h1);
```

- Dataset é uma propriedade de HTMLElement, esse propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave/valor com todos os atributos do elemento html que começarem com data-.

```html
<div data-cor="azul" data-width="500">Uma Div</div>
<span data-anime="left" data-tempo="2000">um span</span>
```

```javascript
//Ambos os valores selecionam a mesma div acima
let div = document.quertSelector('div');
div = document.querySelector('[data-cor]');
div document.querySelector('[data-cor="azul"]');

div.dataset;
//DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; //azul
div.dataset.width; //500
div.dataset.tempo = 1000;
```

- Para acessar atributo com quertSelector use [data-cor] que tambem é seletor de css,exemplo [data-cor="azul"] { background: blue; }
- Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM/JS.
- A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. alem de deixar a estrutura de TAG mais organizada.
- Por padrão o Javascript não aceita - (traço) como caracter valido, para nomear a propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

#### Arrays

- No ES6 ganhamos funções para tratar arrays.Dado o array -> const arr = [1,3,4,5,8,9];
- forEach: Percorre todos os elementos
- Map: Percorre todos os elementos e faz algo com seus valores(retorna novo valor)
- Reduce: Reduz os elementos em um único valor.
- Filter: Filtra os elementos dado uma condição.
- Find: Encontra uma determinada informação.
- Every: verifica se todos os elementos respeitam dada condição
- Some: Verifica se existe pelo menos um elemento que respeita dada condição.

```javascript
//forEach
const newArray = numeros.forEach(function (numero) {
  console.log(numero);
});

//Map
const dobro = numeros.map(function (numero) {
  return numero * 2;
});
console.log(dobro); // 2,4,6,8,10

//Filter
const maioresQueTres = numeros.filter(function (numero) {
  return numero > 3;
});
console.log(maioresQueTres); // 4, 5

//Find
const tres = numeros.find(function (numero) {
  return numero === 3;
});
console.log(tres); // 3

//Every
const todosMaiorQueZero = numeros.every(function (numero) {
  return numero > 0;
});
console.log(todosMaiorQueZero); // true

//Some
const algumMaiorQueQuatro = numeros.some(function (numero) {
  return numero > 4;
});
console.log(algumMaiorQueQuatro); // true

//Reduce
const soma = numeros.reduce(function (soma, numero) {
  return soma + numero;
}, 0);
console.log(soma); // 15

//FindIdex
const indice = numeros.findIndex((repository) => repository.id === id);
console.log(indice); // 2
```

#### Tudo é Objeto

- Tudo em Javascript é objeto (Todo objeto possui um protótipo, menos o null e o undefined (este não é um objeto)).

```javascript
// Objeto Literal
const menu = {
  selector: ".principal",
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add("active");
  },
};

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty("class"); // método herdado
```

```javascript
["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao Body
```

#### Arrow Function

- Escopo Léxico: Funções ao serem criadas geram escopo próprio, esse escopo existe enquanto a função existe e você pode acessar usando o this, arrow functions não possui this, o this utilizado em arrow functions fara referência ao objeto que ele já era referência no momento da criação. Escopo Léxico significa que podemos acessar dentro da função com o this referências independentes do escopo.
- Retorno: Não precisamos declarar explicitamente o retorno, a última expressão realizada vai ser o retorno.
- Não é possível nomear uma arrow function, elas são sempre anônimas.
- Uma função normal é criada na memoria logo de inicio(host), logo se eu chamo antes/apos a função ela sera executada, diferente da arrow function que precisa ser declarada antes.

```javascript
const upperName = function (name) {
  return name.toUpperCase();
};
upperName("André"); // ANDRÉ

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName("Rafael"); // rafael

const countLetters = (word) => word.length;
countLetters("Rafael"); // 6
```

#### Destructuring

- Podemos desestruturar objetos/array, suponha que temos um objeto pessoa e dentro dele outro objeto endereço, podemos desestruturar -> const{ nome, idade, endereco: {cidade} } = objeto;

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

document.documentElement.addEventListener("mousemove", handleMouseMove);
```

- Arrays

```javascript
const frutas = ["Banana", "Uva"];
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

Rest: Pega o resto das propriedades, pode ser usado em funções, arrays e outros. const{nome,…resto} = usuário;

```javascript
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList("Google", "André", "Pedro", "João");
```

Spread: Repassa as informações de um objeto ou array para outra estrutura. Vetores-> const array3 = [ …array1, …array2 ]; / Objetos -> const usuario2 = {…usuario1, nome: ‘Neves’};, pode ser utilizado para juntar 2 arrays.

```javascript
// Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
Math.max(...numeros); // retorna 20

// Transformar ArrayLike and Array
const items = document.querySelectorAll("li");

// items.map() não existe, agora [...items]
// é uma nova array, com cada elemento de items.
[...items].map((item) => (item.innerText = "Teste"));

// Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };
```

#### Templates Literals

-Simplifica o uso de variáveis dentro da string.

```javascript
console.log(Meu nome é ${nome} e tenho ${idade} anos.);
```

#### Object Short Syntax

- Simplifica forma de passar parâmetros para objetos.
  Antes: const teste = { nome: nome, empresa: ‘teste’};
  Depois: const teste = { nome, empresa: ‘teste’};

#### Extra

-Sincrona → Executa uma atras da outra.
-Assincrona → Varios processos simultaneamente.
-CallBack → Uma ação que executara algo e depois que concluir vai executar alguma outra função.
-Promise → Quando faço callback eu digo que retornarei depois, quando faço a promise eu retorno de imediato uma promessa que no futuro vou trazer um valor, dado uma Promise, eu rejeito a promesa ou eu resolvo a promessa.
-Async/Await → Apesar de parecer sincrona ele é assincrono, ou seja, ele é uma camada para melhor visualizar e tratar a Promise que por sua vez trata o callback.
