<h1 align="center">
    <img alt="Dogs" title="logo" src="github/certificado.jpg" width="100%" />
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

### Front-End (ReactJS)

- [React](https://reactjs.org)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)

### Comandos Front-End (ReactJS)

```bash
$ npx create-react-app dogs  (start project)
$ yarn start (start application)
$ cleaning project src(README.md, App.css, App.test.js, index.css, logo.svg, serviceWorker.js, setupTests.js)
$ cleaning project public(robots.txt, manigest.json, logo512.png, logo192.png)
$ yarn add history react-router-dom@next (React-router-dom)
```

- Criar pasta .vscode e dentro dela arquivo settings.json

```javascript
{
  "git.enabled": false,
  "files.exclude": {
    "node_modules": true,
    ".vscode": true,
    ".gitignore": true,
    "package.json": true,
    "package-lock.json": true,
	"yarn.lock":true,
    "public": true
  }
}
```

## :information_source: Como usar ?

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

## :page_facing_up: Anotações -> Formulários

### Input

- Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.

```javascript
const App = () => {
  const [nome, setNome] = React.useState("");

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <p>{nome}</p>
    </form>
  );
};
```

### Form

- No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".

### Objeto

- Podemos definir um objeto que irá conter todos os valores dos campos do formulário.

```javascript
const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};
```

### TextArea

- No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.

```javascript
const App = () => {
  const [mensagem, setMensagem] = React.useState("");

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  );
};
```

### Select

- O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.

```javascript
const App = () => {
  const [select, setSelect] = React.useState("");

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};
```

### Radio

- No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.

```javascript
const App = () => {
  const [radio, setRadio] = React.useState("");

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === "tablet"}
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};
```

- Defina um estado para cada grupo.

```javascript
const App = () => {
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  return (
    <form>
      <h2>Dispositivo</h2>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === "notebook"}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === "smartphone"}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === "azul"}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === "vermelho"}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
    </form>
  );
};
```

### CheckBox

- O estado do checkbox está relacionado ao checked.

```javascript
const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked("verde")}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked("amarelo")}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked("roxo")}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
```

### Componente Input

- Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.

```javascript
const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};
```

```javascript
const App = () => {
  const [nome, setNome] = React.useState("");

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
};
```

### Componente Select

```javascript
const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
```

```javascript
const App = () => {
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
};
```

### Componente Radio

```javascript
const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};
```

```javascript
const App = () => {
  const [cor, setCor] = React.useState("");

  return (
    <form>
      <Radio
        options={["azul", "verde", "amarelo"]}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};
```

### Componente Checkbox

```javascript
const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};
```

```javascript
const App = () => {
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <Checkbox
        options={["Uva", "Laranja", "Limão"]}
        value={fruta}
        setValue={setFruta}
      />

      <Checkbox
        options={["Termos e Condições"]}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
};
```

### Validação

- O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com JavaScript utilizando REGEX.

```javascript
const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};
```

```javascript
const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">Cep</label>
      <input
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};
```

### useForm

- Podemos definir um custom hook para formulários.

```javascript
import React from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
```

```javascript
import React from "react";

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
```

```javascript
import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm("cep");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
```

## :page_facing_up: Anotações -> CSS no React

### CSS

- A forma mais simples de uso do CSS é importanto o mesmo direto no Javascript. A importação é efetuada pelo WebPack.
- Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.
- Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.

#### CSS Modules

- É uma especificação, os modules garantem que as classes utilizada sejam sempre únicas, evitando o conflito. O modo já vem configurando com o create-react-app, basta definirmos o nome do arquivo css com a palabra .module. Ex: Produto.module.css. Devemos definir um nome para a impotação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

```css
import styles from './Produto.module.css';

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};
```

- Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.

- O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.

```css
@value width: 900px;
```

- Se precisar pode usar o css nativo

```css
.body {
  --cor: red;
}
.preco {
  color: var(--cor);
}
```

- Quando estamos desenvolvendo ele insere o css no corpo do arquivo e quando fazemos o build ele cria o arquivo .css

#### Styled Components

- Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único.
- Precisa de um plugin + biblioteca.
- O styled é um objeto com diferentes métodos que representam as tags de HTML.
- O uso dos backticks para passarmos a string com os valores do CSS, é válido no JavaScript. Esses valores são passados como argumento da função.

```javascript
function template(value, total) {
  console.log(value);
  console.log(total);
}
const total = 10;
template`São ${total} no total`;
```

- Podemos passar propriedades como em um component de React.

```javascript
const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 10;
  template`São ${total} no total`;

  return (
    <div>
      <Preco cor="#53d956">R$ 2999</Preco>
      <Preco cor="#84e">R$ 1999</Preco>
    </div>
  );
};
```

- Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.

```javascript
import styled from "styled-components";

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? "#53d956" : "#000")};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Ativar
    </Button>
  );
};
```

- Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.

```javascript
const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;
```

### CSS Framework

- Podemos adicionar qualquer library/framework de css ao React. Com o @next vamos instalar a versão 5 do bootstrap. Popper é necessário para algumas funções do bootstrap.

```javascript
npm install bootstrap@next
```

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

```javascript
import React from "react";

const App = () => {
  return (
    <div className="card bg-dark text-white m-5" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  );
};

export default App;
```

#### Componentes

- Existem frameworks de CSS que te fornecem componentes prontos para serem utilizados no local de classes. O react-bootstrap utiliza em sua base o bootstrap, mas fornece componentes React.

```javascript
npm install react-bootstrap bootstrap
```

```javascript
import React from "react";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <Card bg="dark" text="white" style={{ maxWidth: "18rem" }} className="m-5">
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
```

#### Animações

- Anime a entrada de elementos utilizando a propriedade animation.

```javascript
.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
}

@keyframes animeLeft {
  to {
    opacity: initial;
    transform: initial;
  }
}
```

```javascript
const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};
```

```javascript
const Produto = () => {
  return (
    <div className="animeLeft">
      <h1>Notebook</h1>
      <span>R$ 2000</span>
    </div>
  );
};
```

- Anime a entrada de elementos utilizando a propriedade animation.

```javascript
.container {
  overflow: hidden;
}

.content {
  display: flex;
  z-index: 100;
  transition: transform 0.3s ease;
}

.item {
  flex-shrink: 0;
  width: 80%;
  margin: 0 10%;
  border-radius: 4px;
  background-color: #eee;
  text-align: center;
  padding: 10rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 1rem auto;
}
```

```javascript
import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
```

```javascript
import React from "react";
import "./App.css";
import Slide from "./Slide";

const App = () => {
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    },
  ];

  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
```

#### Imagens

- Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.
- No CSS podemos utilizar o caminho direto. É importante colocar o ./, pois o webpack vai utilizar isso e substituir para o caminho final do site.
- Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.

```javascript
import { ReactComponent as Dog } from "./img/dog.svg";

const App = () => {
  return (
    <div>
      <Dog />
    </div>
  );
};
```

- Além da importação direto como componentes, podemos também definirmos cada SVG como um componente. Lembre-se, propriedades que tiverem hífens serão modificadas: fill-rule vira fillRule

```javascript
const DogSvg = ({ color }) => {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z"
        fill={color}
      />
      <circle cx="21" cy="3" r="3" fill={color} />
      <circle cx="7" cy="3" r="3" fill={color} />
    </svg>
  );
};
```

## :page_facing_up: Anotações -> React Router

### Router

- É uma extensão que permite gerenciarmos as rotas do React. Ela é desenvolvida e mantida pela empresa React Trainning.

- https://reacttraining.com/react-router/

- https://github.com/ReactTraining/react-router/blob/dev/docs/api-reference.md

```javascript
npm install history react-router-dom@next
```

#### BrowserRouter, Routes e Route

- O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Sobre from "./Sobre";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
```

#### 404 - Não Encontrado

- O \* renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe.

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Pagina404 from "./Pagina404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### Link

- O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.

```javascript
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};
```

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
```

#### NavLink

- O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.

```javascript
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "tomato",
  };
  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="contato" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </nav>
  );
};
```

#### useNavigate

- O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

```javascript
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("Faz o login");
    navigate("/sobre");
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
```

### useParams

#### Rota Dinâmica

- O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produto from "./Produto";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};
```

#### UseParams

- O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.

```javascript
import { useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};
```

#### useLocation

- Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.

```javascript
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get("q"));
    console.log("Toda vez que a rota mudar");
  }, [location]);

  return <div></div>;
};
```

```javascript
const [searchParams, setSearchParams] = useSearchParams();
```

### Nested Routes

- Utilizamos nested routes quando precizamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
```

```javascript
import { useParams, Route, Routes, NavLink } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};
```

#### Outlet

- Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota.

```javascript
const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
```

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Login from "./Login";
import Produto from "./Produto";
import Header from "./Header";
import NaoEncontrada from "./NaoEncontrada";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### Head

- No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotas é essêncial realizar a mudança do título e descrição para cada rota. Podemos fazer isso através de um componente ou custom hook.

```javascript
const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
};
```

```javascript
import Head from "./Head";

const Sobre = () => {
  return (
    <div>
      <Head title="Página Sobre" description="Descrição da sobre" />
      <h1>Sobre</h1>
      <p>Essa é a Sobre</p>
    </div>
  );
};
```

```javascript
import Head from "./Head";

const Home = () => {
  return (
    <div>
      <Head title="Página Home" description="Descrição da home" />
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};
```

### Helmet

- Uma extensão famosa é o react-helmet. Ela retonar com componente em que você pode definir tags do Head dentro do mesmo.
- https://github.com/nfl/react-helmet

```javascript
npm install react-helmet
```

```javascript
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};
```

## :page_facing_up: Anotações -> Mais React

### PropTypes

- O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.
- https://reactjs.org/docs/typechecking-with-proptypes.html

```javascript
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
```

```javascript
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <Button margin="10px" width={300}>
        Clique Aqui
      </Button>
    </div>
  );
};
```

#### defaultProps

- Podemos também definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. Isso faz parte do React.

```javascript
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  width: 200,
  disabled: false,
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
```

### Lazy e Suspense

#### Code Splitting

- Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias.

```javascript
import React from "react";
const Contato = React.lazy(() => import("./Contato"));

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(true)}>Ativar</button>
    </div>
  );
};

export default App;
```

### Memo

- Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependam de estados diferentes.

```javascript
import React from "react";
import Header from "./Header";

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
```

```javascript
import React from "react";

const Header = () => {
  console.log("Renderizou");
  return <div>Header fixo</div>;
};

export default React.memo(Header);
```

### useReducer

- O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo.

```javascript
function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "reduzir":
      return state - 1;
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("reduzir")}>-</button>
      <p>{state}</p>
    </div>
  );
};
```

```javascript
Sem o useReducer
const App = () => {
  const [contar, setContar] = React.useState(0);

  function aumentar() {
    setContar(contar + 1);
  }

  function reduzir() {
    setContar(contar - 1);
  }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
      <p>{contar}</p>
    </div>
  );
};
```

```javascript
function reducer(state, action, ae) {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, ["Item 1"]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "remover", content: "Item 1" })}>
        +
      </button>
      <button
        onClick={() => dispatch({ type: "adicionar", content: "Item 2" })}
      >
        -
      </button>
      <p>{state}</p>
    </div>
  );
};
```

### Classes

- Antes dos hooks a única forma de criarmos componentes com estados reativos, era através da extensão da classe React.Component. O JSX que é renderizado pelo componente de classe deve estar dentro do retorno do método render().

#### extends React.Component

```javascript
import React from "react";

class Produtos extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente de Classe</h1>
      </div>
    );
  }
}

export default Produtos;
```

```javascript
import Produtos from "./Produtos";

const App = () => {
  return (
    <div>
      <Produtos />
    </div>
  );
};
```

#### this.props

```javascript
const App = () => {
  return (
    <div>
      <Produtos titulo="Meus Produtos" />
    </div>
  );
};
```

```javascript
class Produtos extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}
```

#### this.state

```javascript
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}
```

#### this.setState()

```javascript
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button
          onClick={() =>
            this.setState((state) => ({
              contar: state.contar + 1,
            }))
          }
        >
          Adicionar
        </button>
      </div>
    );
  }
}
```

#### Métodos

```javascript
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}
```

#### Ciclo de Vida

```javascript
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Quando ele monta, utilizado para o Fetch");
  }

  componentDidUpdate() {
    console.log("Sempre que atualiza");
  }

  componentWillUnmount() {
    console.log("Sempre que é desmontado");
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}
```

Aula Final -> 08 Projeto Final -> 0810 useContext
