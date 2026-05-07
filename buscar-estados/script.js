//const select_estados = document.querySelector('#estados')
//const select_municipios = document.querySelector('#municipios')
//const option_inicial = document.querySelector('.option_inicial')


//select_estados.addEventListener('input', async () => {

    //const estado = select_estados.value
    //const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`

    //const consulta = fetch(url)


   // let resposta = await consulta

    //if(!resposta.ok){
        //throw new Error('Erro na Requisição')
    //}

    //let respObj = await resposta.json()

    //console.log(respObj)


    //select_municipios.removeChild(option_inicial)
    //select_municipios.removeAttribute('disabled')


    //respObj.forEach(municipio => {

        //const novaOpcao = document.createElement('option')

        //novaOpcao.textContent = municipio.nome

        //select_municipios.appendChild(novaOpcao)

    //})

//})

// logica do ivo ( so esta funcionando com essa lógica ):
document.addEventListener('DOMContentLoaded', function() {

    const estadosSelect = document.getElementById('estados');
    const municipiosSelect = document.getElementById('municipios');


    // Função para carregar os municípios com base no estado selecionado
    estadosSelect.addEventListener('change', async function() {

        const estadoSelecionado = estadosSelect.value;

        municipiosSelect.innerHTML = '<option value="">Selecione um município</option>';

        municipiosSelect.disabled = true;


        if (estadoSelecionado) {

            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/distritos`);

            const municipios = await response.json();

            municipios.forEach(municipio => {

                const option = document.createElement('option');

                option.value = municipio.id;

                option.textContent = municipio.nome;

                municipiosSelect.appendChild(option);

            });

            municipiosSelect.disabled = false;

        }

    });

});