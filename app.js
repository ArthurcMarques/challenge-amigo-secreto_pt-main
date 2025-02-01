let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há mais amigos para sortear!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos.splice(indice, 1)[0];

    mostrarResultado(sorteado);
    atualizarLista();
}

function mostrarResultado(nome) {
    let resultado = document.getElementById("resultado");
    let item = document.createElement("li");
    item.textContent = `Sorteado: ${nome}`;
    resultado.appendChild(item);
}
