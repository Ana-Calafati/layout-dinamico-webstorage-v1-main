// function 

// /* Testes com os exemplos do w3 schools  */
// let x = 5;

// try{
//     x = y +1

// }catch(erro){
//     let text = `
//     <strong>Nome do erro:<strong> ${erro.name} <br />
//     <strong>Mensagem:<strong> ${erro.message} <br />
//     <strong>Stack:<strong> <span>${erro.stack} </span>
//     `;

//     document.body.innerHTML = text
// };

/* Lançar uma excessão (erros personalizado) */
/* Criar uma função geradora de erro */
/* Testando a função: carregarComponentes() */


const carregarComponente = async (caminho, container) =>{
    try{
        const resposta = await fetch(caminho);

        if (!resposta.ok){
            throw new Error('Erro ao carregar componente')
        }

        const html = await resposta.text();
        container.innerHTML = html;

    }catch(erro){
        console.error(erro)
    }

};

const containerP = document.querySelector('.containerP');
carregarComponente('./c-test.html', containerP);

const url = 'c-test.html'
const container = document.querySelector("body");
carregarComponente(url,container);


/* Criar uma função geradora de erro */
// function gerarErro() {
//     let erro = new Error("Houve um erro na validação dos dados.");
//     erro.nome = "ErroDeValidacao";
//     erro.codigo = 1001;
//     erro.tipo = "VALIDACAO";

//     throw erro;
// }

// /* Testando a função: carregarComponente */
// // 01 - Criar o componente que será injetado
// // 02 - Criar o elemento que irá receber o componente (no index.html)
// // 03 - Capturar o elemento que irá receber o componente (no index.html)
// // 04 - Utilizar a função para carregar o componente

// try {
//     gerarErro();
// } catch (erro) {
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.nome} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Código:</strong> ${erro.codigo} <br />
//     <strong>Tipo:</strong> ${erro.tipo} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span>
//     `;

//     document.body.innerHTML = text;
// }



function geradoraErro(nome, mensagem, codigo, tipo) {
    let erro = new Error(mensagem);
    
    erro.name = nome;
    erro.codigo = codigo;
    erro.tipo = tipo;

    throw erro;
};

try {
    geradoraErro("Erro de Validação", "Ocorreu um problema no sistema", 1001, "VALIDACAO");
} catch (erro) {
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Código:</strong> ${erro.codigo} <br />
    <strong>Tipo:</strong> ${erro.tipo} <br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text;
};

//OK

/* Criar uma requisição HTTP */

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json())
// .then(dados => console.log(dados))
// .catch(error => console.log(error));


// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => {

//     return resposta.json()
// })

// .then((dados) => {

//     console.log(dados)
// })

// .catch((error) => {
//     console.warn(error)
// });


/* Criar uma requisição HTTP com fetch e .then */

const url = 'https://viacep.com.br/ws/01001000/json/dfdfdfd';

const consulta = fetch(url);

consulta
.then((response) => {

    if(!response.ok){
        throw new Error('Erro na Requisição.')
    }
    return response.json()
})
.then((dados) => {

    if(dados.erro){
        throw new Error('CEP inválido ou não encontrado.')
    }
    console.log(dados)
})
.catch((erro) => {

    console.warn(erro.message)
});

// const url = 'https://viacep.com.br/ws/01001000/json/'
// const consulta = fetch(url);

// consulta.then((resposta) => {

//     const resp = resposta.json()
//     console.log(resp)
//     return resp

// })
// .then((dados) => {

//     console.log(dados)
// })
// .catch((error) => {

//     console.warn(error)

// });


/* Lógica do IVO */

// const criarErro = (mensagem, codigo, tipo) => {
//     let erro = new Error(mensagem);
//     erro.codigo = codigo;
//     erro.tipo = tipo;
//     return erro;
// };

// try {
//     // Aqui você vai chamar a função, por exemplo:
//     // throw criarErro("Mensagem de erro", 1001, "VALIDACAO");
// } catch (erro) {

//     console.log(erro);
// };
// try {

//     let saldo = 100;

//     if (saldo < 200) {
//         throw criarErro('Saldo insuficiente', 60, 'FINANCEIRO');
//     }

// } catch (erro) {

//     console.log(erro, erro.codigo, erro.tipo);
// };
// /* Testando a função: carregarComponente */
// // 01 - Criar o componente que será injetado
// // 02 - Criar o elemento que irá receber o componente (no index.html)

