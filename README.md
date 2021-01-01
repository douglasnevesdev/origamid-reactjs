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

<i>Obs:.<i> Adicionei anotações importantes sobre o JavaScript/React para ser utilizado como uma base de consulta.

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

## :page_facing_up: Anotações -> JavaScript

### Intrudução

O ES6 seria uma nova maneira de fazer os processos no javascript, ou seja, não faz nada novo, não são novas funcionalidades, apenas reformulou a forma de chegar ao resultado final, por isso é possível sua conversão com o babel, um exemplo de implementação do ES6 é a possibilidade de trabalhar com classes de forma nativa no javascript. Como alguns navegadores não entende o ES6 usamos o babel para converte as sintaxes em função, garantindo assim que todos os navegadores entenda o código.

### Modules

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

### HTMLElement

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

### Arrays

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

### Tudo é Objeto

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

### Arrow Function

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

### Destructuring

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

### Rest e Spread

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

### Templates Literals

-Simplifica o uso de variáveis dentro da string.

```javascript
console.log(Meu nome é ${nome} e tenho ${idade} anos.);
```

### Object Short Syntax

- Simplifica forma de passar parâmetros para objetos.
  Antes: const teste = { nome: nome, empresa: ‘teste’};
  Depois: const teste = { nome, empresa: ‘teste’};

### Fetch

- Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

```javascript
fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
```

### Async / Await

- Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

```javascript
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");
```

### Expressões

- Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

```javascript
const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);

const active = true;
const button = active && "Botão está ativo";
```

### Extra

- Sincrona → Executa uma atras da outra.
- Assincrona → Varios processos simultaneamente.
- CallBack → Uma ação que executara algo e depois que concluir vai executar alguma outra função.
- Promise → Quando faço callback eu digo que retornarei depois, quando faço a promise eu retorno de imediato uma promessa que no futuro vou trazer um valor, dado uma Promise, eu rejeito a promesa ou eu resolvo a promessa.
- Async/Await → Apesar de parecer sincrona ele é assincrono, ou seja, ele é uma camada para melhor visualizar e tratar a Promise que por sua vez trata o callback.

## :page_facing_up: Anotações -> React

### React Element

-Todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.

- Abaixo, temos 2 funções com o nome App() que serve como exemplo, na primeira função App() declaramos um <div>, ou seja, estamos usando o JSX que se parece com HTML, na segunda função App(), mostramos o que o babel faz na primeira função nos bastidores, ele transforma tudo que declaramos como JSX em um React.createElement.
- Utilizamos o babel para converte nosso codigo JSX para React.createElement, ate porque seria verboso e dificil ficar declarando React.createElement, principalmente em casos que temos um elemento dentro do outro, logo o babel agiliza esse processo. -https://babeljs.io/repl

```javascript
function App() {
  return <div id="container">Meu App</div>;
}
// É transformado em:
function App() {
  return React.createElement("div", { id: "container" }, "Meu App");
}
```

<p align="center">
  <img alt="createElementReact" src="github/createlement.png" width="100%">
</p>

### Componentes

- Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React ou classes que estendem React.Component e possuem o método render retornando um elemento React.

```javascript
// Function Component
const Button = () => {
  return <button>Comprar</button>;
};

// Class Component
class Button extends React.Component {
  render() {
    return <button>Comprar</button>;
  }
}
```

### Composição

- O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes que podem ser reutilizados.

```javascript
const Button = () => {
  return <button>Comprar</button>;
};

const MainNav = () => {
  return (
    <nav>
      <a href="#">Link 1</a>
      <Button />
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <MainNav />
      <Button />
    </div>
  );
};
```

### Eventos

- Podemos atribuir eventos diretamente aos elementos.

```javascript
const Produtos = () => {
  function handleClick(event) {
    alert("Comprou: " + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
```

### Hooks

- Utilizamos o React pela facilidade de sincronização do estado. Antes dos Hooks, isso só era possível em componentes criados por meio de classes.

```javascript
const Compras = () => {
  // useState é um Hook que define uma variável reativa
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Comprar: {count}</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};
```

### WebPack

- Agrupa (bundle) o código do seu aplicativo
- Permite definirmos os componentes em diferentes arquivos para melhor organização
- Facilita a importação de código externo instalado via NPM
- https://webpack.js.org/

### Babel

- Transforma JSX return <div></div> em funções de React React.createElement()
- Transforma JavaScript novo const em JavaScript antigo var (tornando compativel)
- https://babeljs.io/

### npx create-react-app

- Cria um ambiente de desenvolvimento já configurado e otimizado para a criação de aplicativos com React. https://create-react-app.dev/
- npx é um comando do NPM que executa diretamente um pacote online, sem a necessidade de instalarmos o pacote na nossa máquina. A vantagem é que ele irá sempre instalar a versão mais atualizada do ambiente criado por create-react-app.

```javascript
npx create-react-app meuapp
```

### JSX

- JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.

```javascript
const App = () => {
  return <button>Comprar</button>;
};
```

É transformado em

```javascript
const App = () => {
  return React.createElement("button", null, "Comprar");
};
```

Obs: É possível utilizar a extensão .jsx

### JSX Arrays

- O JSX ira lista cada um dos itens de array. Ele não irá separar ou colocar vírgula, é você que deve modificar o array para o resultado desejado.

```javascript
const App = () => {
  const produtos = ["Notebook", "Tablet", "Smartphone"];
  return <div>{produtos}</div>;
};
```

### Keys

- O JSX necessita de uma key única para cada elemento do Array, dessa forma o React consegue entender se você adicionou um item no array, ele compara as chaves e acrescenta/modifica o item novo sem precisar refazer todo o array, se ele não tiver a chave, ele não vai sabe como comparar, logo ele recria o array e lança uma exception no console.

### Eventos

- Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente dos diversos browsers que o React suporta).
- Funciona da mesma forma em todos os browsers que o React fornece suporte.

#### window/document

- Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener, o ideal é passar esse tipo de evento dentro do Hooks.

```javascript
const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <button onClick={(event) => alert(event.target.innerText)}>
      Compre Violão
    </button>
  );
};
```

### Componentes

- O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo (organização, não influencia na performace), isso seria os componentes funcionais.
- Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Heaedr e Footer, até micro componentes como Input e Button.
- Um componente deve sempre retorna algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).

### Propriedades

- Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecimentos como propriedades ou props.

```javascript
const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};
```

É comum desestruturarmos as propriedades.

```javascript
const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};
```

#### Children

Se utilizamos o componente abrindo e fechando o mesmo, o conteúdo internomdeste será através da propriedade children.

```javascript
const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo>Meu Primeiro Título</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};
```

#### Rest e Spread

Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

```javascript
import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
```

- Podemos passar diferentes tipos de dados e até outros componentes nas propriedades, exemplo array.

## :page_facing_up: Anotações -> React Hooks

### Estado

- O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

```javascript
const App = () => {
  const ativo = true;

  return (
    <button disabled={!ativo}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button>
  );
};
```

### Hooks

- Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

```javascript
const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  );
};
```

### Props

- Podemos passar o estado e a função de modificação como propriedades para outros elementos.

```javascript
import React from "react";
import Modal from "./Modal";
import ButtonModal from "./ButtonModal";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
```

### Reatividade

- Não modifique o estado diretaemente. utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes ( Reatividade é renderiza todos os componentes que depende do estado ).

### CallBack

- Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retornado na função.

```javascript
const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? "Está Ativo" : "Está Inativo"}
    </button>
  );
};
```

### React.StrictMode

- O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas.
- Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.
- Fica ativo apenas no modo de desenvolvimento.
- Exibe 2 vezes no console.

```javascript
const Contador = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      setItems((items) => [...items, "Item " + (contar + 1)]);
      return contar + 1;
    });
    // Tirar o efeito de dentro do setContar irá concertar o erro
    // setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};
```

### useEffect

- Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderiado, atualizado ou destruído. com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log("Ocorre ao renderizar e ao atualizar");
  });

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

- Se utilizarmos o valor de um hook( Ex: useState ) ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência no array.
- Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.
- Se o useEffect tiver um return, esse sera executado quando o componente sumir da tela, se tiver [] como parametro, essa função sera executada apenas uma vez ao iniciar e se tiver [variavel_de_estado] a função sera executada toda vez que o estado da variavel mudar.
- O callback do useEffect é executado depois da inicialização do componente.

```javascript
const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener("scroll", handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <p style={{ height: "200vh" }}>Produto</p>;
};
```

### useRef

- Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

```javascript
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  return <video ref={video}></video>;
};
```

- O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.
- O valor de referencia não sera perdido com o carregamento do componente.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao("Obrigado por comprar");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};
```

### useMemo

- Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.
- Recebe um callback que retorna um valor, esse valor sera salvo na memoria, não sera executada novamente a função quando o componente for atualizado, ou seja, so executa na criação, é utilizado para operações lentas no javascript, isso não seria operações assincronas e sim operações matematicas como somas em arrays ou algo do tipo.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem("produto");
    // só será executado uma vez
    console.log("teste");
    return localStorageItem;
  }, []);
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
```

```javascript
function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
```

### useCallback

- Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return <button onClick={handleClick}>{contar}</button>;
};
```

- Uma prova de que o useCallback não irá criar uma nova função. Isso não significa que ele é mais ou menos otimizado. O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo.

```javascript
const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log("Teste");
  };

  const func2 = React.useCallback(() => {
    console.log("Teste");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1:", set1);
  console.log("Set2:", set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
```

### createContext

- O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

```javascript
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

- Utilizamos o contexto normalmente na parte global da aplicação, exemplo App.js ou na parte que você quer que tenha acesso ao contexto.

#### Provider

- O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto, ou seja, os dados que serão compartilhados entre todos os componentes.

```javascript
import React from "react";
import Produto from "./Produto";
import UserContext from "./UserContext";

const App = () => {
  return (
    <UserContext.Provider value={{ nome: "André" }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default App;
```

### useContext

- O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.

```javascript
import React from "react";
import UserContext from "./UserContext";

const Produto = () => {
  const user = React.useContext(UserContext);

  return <p>Produto de: {user.nome}</p>;
};

export default Produto;
```

#### GlobalStorage

- Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadoras do useState.

```javascript
import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
```

```javascript
import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
```

```javascript
import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};

export default Produto;
```

#### Custom Hooks

- Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palabra use. Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, seha um valor único, um array ou um objeto.

```javascript
const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
```

```javascript
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};
```

- Aqui o useCallback é necessário para evitar um render infinito.

```javascript
import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
```

```javascript
import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto/notebook");
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;
};

export default App;
```

#### Regras

- Não utilize os hooks dentro de funções, loops ou condicionais.

```javascript
const App = () => {
  // Correto
  React.useEffect(() => {
    document.title = "Título novo";
  }, []);

  let condicao = true;
  if (condicao) {
    // Errado
    React.useEffect(() => {
      document.title = "Título novo";
    }, []);
  }

  function mudarTitulo() {
    // Errado
    React.useEffect(() => {
      document.title = "Título novo";
    }, []);
  }

  for (let i = 0; i < 10; i++) {
    // Errado
    React.useEffect(() => {
      document.title = "Título novo";
    }, []);
  }

  return <div></div>;
};
```

- Utilize hooks apenas em componentes e em custom hooks.

```javascript
import React from "react";

// Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
function numeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, []);
  return numero;
}

const App = () => {
  return <div></div>;
};

export default App;
```
