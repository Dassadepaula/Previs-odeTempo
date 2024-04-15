//Clicar no botão
// Pegar o que está dentro do input
//ir no servidor e pegar as informações do tempo atualizadas
//Colocar as informações na tela

let chave ="99c3873d6134b0d07a37fc100531ab80"

function colocarNaTela(dados) {
   console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + '%'
}

async function BuscarCidade(cidade) {
    
    let dados = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=99c3873d6134b0d07a37fc100531ab80&units=metric').then(resposta => resposta.json())
    
    //AWAIT-ESPERE
    //FETCH- ferrramente do JS para acessar servidores
    //JSON- formato que o javascripot entende
    
    console.log(dados)
    colocarNaTela(dados)

}

function CliqueiNoBotao() {
    
    let cidade = document.querySelector(".input-cidade").value
   
    BuscarCidade(cidade)

}

/*
Clica no botão
    --> CHAMA A FUNÇÃO CliqueiNoBotao()
    --> Vai no INPUT e pega o que está lá dentro
    --> PASSAR a cidade para o servidor
    Math.floor -> Arredondar valor
    */