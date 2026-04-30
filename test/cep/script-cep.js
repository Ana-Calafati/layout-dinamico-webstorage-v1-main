const url = 'https://viacep.com.br/ws/14802452/json/';
// colocando o cep aqui no codigo, esta funcionando. so falta colocar isso na interface.

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