//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let nomeAmigo = document.getElementById('amigo').value;
let tabelaAmigos = [];


function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo');
    if(nomeAmigo.value == ''){
        alert('Informar um  nome plis')
        return;
    }
    if(tabelaAmigos.includes(nomeAmigo.value)){
        alert("este nome já existe")
        return;
    }

    let listaAmigos =  document.getElementById('listaAmigos');
   
    tabelaAmigos.push(nomeAmigo.value);
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
};

function sortearAmigo(){
    if(tabelaAmigos.length < 4){
       alert('Adicione pelo menos 4 amigos!')
       return; 
    }

    embaralha(tabelaAmigos);
    let listaSorteio =  document.getElementById('resultado');


    for(let i = 0; i < tabelaAmigos.length; i++){

        if(i == tabelaAmigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML +  tabelaAmigos[i] + '-->' + tabelaAmigos[0] + '<br>'

        }else{
        listaSorteio.innerHTML = listaSorteio.innerHTML +  tabelaAmigos[i] + '-->' + tabelaAmigos[i + 1] + '<br>'
    }
}


};


function embaralha(lista){

    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }

}
