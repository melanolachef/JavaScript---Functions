// 1. Manipulação do DOM
// 1.1 querySelector
const titulo = document.querySelector('h1');
titulo.textContent = 'Funções Essenciais de JavaScript';



// 1.2 createElement
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado Dinamicamente';
document.body.appendChild(novoElemento);



// 1.3 getElementById
const botao = document.getElementById('btnExemplo');
botao.textContent = 'Botão Atualizado';



// 2. Eventos
// 2.1 addEventListener
botao.addEventListener('click', () => {
    alert('Botão foi clicado!');
});



// 2.2 removeEventListener
function mensagem() {
    console.log('Evento disparado');
}
botao.addEventListener('click', mensagem);
botao.removeEventListener('click', mensagem);



// 3. Funções de Tempo
// 3.1 setTimeout
setTimeout(() => {
    console.log('Executado após 2 segundos');
}, 2000);



// 3.2 setInterval
const intervalo = setInterval(() => {
    console.log('Executando repetidamente');
}, 1000);
setTimeout(() => clearInterval(intervalo), 5000);



// 4. Manipulação de Arrays
const numeros = [1, 2, 3];
// 4.1 map
const dobrados = numeros.map(num => num * 2);
console.log('Dobro:', dobrados);



// 4.2 filter
const maioresQue1 = numeros.filter(num => num > 1);
console.log('Maiores que 1:', maioresQue1);



// 4.3 reduce
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log('Soma:', soma);



// 4.4 forEach
numeros.forEach(num => console.log('Número:', num));



// 5. JSON e APIs
// 5.1 JSON.parse e JSON.stringify
const json = '{"nome":"Ana","idade":30}';
const obj = JSON.parse(json);
console.log('Nome:', obj.nome);
const novoJson = JSON.stringify(obj);
console.log('JSON:', novoJson);



// 5.2 fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Fetch:', data))
    .catch(error => console.error('Erro:', error));

// 6. Controle de Fluxo
// 6.1 if/else
const idade = 18;
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}



// 6.2 switch
const cor = 'verde';
switch (cor) {
    case 'vermelho':
        console.log('Pare!');
        break;
    case 'amarelo':
        console.log('Atenção!');
        break;
    case 'verde':
        console.log('Siga!');
        break;
    default:
        console.log('Cor inválida');
}



// 7. Manipulação de Strings
const texto = 'JavaScript é incrível';
// 7.1 toUpperCase
console.log('Maiúsculas:', texto.toUpperCase());
// 7.2 toLowerCase
console.log('Minúsculas:', texto.toLowerCase());
// 7.3 includes
console.log('Contém "incrível"?', texto.includes('incrível'));



// 8. Estruturas de Dados Modernas
// 8.1 Map
const mapa = new Map();
mapa.set('nome', 'João');
console.log('Map:', mapa.get('nome'));



// 8.2 Set
const conjunto = new Set([1, 2, 2, 3]);
console.log('Set:', conjunto);



// 9. Outras Funções Utilitárias
// 9.1 Math.random
console.log('Aleatório:', Math.random());
// 9.2 Math.floor
console.log('Arredondado:', Math.floor(4.7));

// Lucas Nunes Melaré Coelho
// RA:3 9ADD
