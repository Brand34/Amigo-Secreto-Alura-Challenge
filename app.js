// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

document.getElementById("agregar").addEventListener("click", agregarAmigo);

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Nombre inválido.");
        return;
    }

    listaDeAmigos.push(nombre);

    let li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    inputAmigo.value = "";
}


function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Agregar amigos");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
}
