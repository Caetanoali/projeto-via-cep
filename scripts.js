window.addEventListener("DOMContentLoaded", () => {

    const dadosSalvos = localStorage.getItem('enderecoSalvo');

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos); // Transforma a string de volta em objeto

        document.getElementById('cep').value = dados.cep || "";
        document.getElementById('logradouro').value = dados.logradouro || "";
        document.getElementById('bairro').value = dados.bairro || "";
        document.getElementById('cidade').value = dados.cidade || "";
        document.getElementById('estado').value = dados.estado || "";
        document.getElementById('numero').value = dados.numero || "";
    }

    console.log("Dados restaurados do LocalStorage com sucesso!");
})

// ouvir o evento de quando o usuario sair do campo cep
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    // validar o cep
    if (!(cepInformado.length === 8))
        return;

    // fazer busca no VIACEP    
    //promessa de que o feath vai buscar o recurso 
    fetch(`http://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data =>{
            //processamento da pagina 
            if(!data.erro){

                document.getElementById('cep').value = data.cep.replace('-', '');

                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;

                //salvamento no localstorage 
                const dadosParaSalvar = {
                    cep:data.cep.replace('-', ''),
                    logradouro:data.logradouro,
                    bairro:data.bairro,
                    cidade:data.localidade,
                    estado:data.uf,
                    numero:""
                }

                localStorage.setItem('enderecoSalvo', JSON.stringify(dadosParaSalvar));

                //confirmação visual para entendimento, no painel do desenvolvedor do site
                console.log("Sucesso, dados salvos no LocalStorage")

            }else {
                alert("CEP não encontrado!")
            }
        })
        .catch(error => console.error("Erro ao buscar CEP: ", error));

})

//tema escuro

const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", ()=> {

    //verificar tema pré-definido do usuario 
    const temaAtual = localStorage.getItem("Tema");
    //verificar o tema e inverter
    const novoTema = temaAtual === "dark" ? "light": "dark";

    //add a classe no nosso body 
    document.body.classList.toggle(novoTema);

    //salvar as preferencias do usuario no localstorage
    localStorage.setItem("tema", novoTema);
    //atualiza botão 
    botaoTema.textContent = novoTema === "dark" ? "Light" : "Dark"
})

document.addEventListener(`DOMContentLoaded`, () => {
    
    //verificar tema salvo
    const temaSalvo = localStorage.getItem("tema");
    
    if(temaSalvo === "dark"){
        document.body.classList.add("dark");
        botaoTema.textContent = "Light"
    } else {
        //caso contrario 
        botaoTema.textContent = "Dark";
    }
})