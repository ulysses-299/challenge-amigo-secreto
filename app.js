// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
lista = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert('Por favor, escribe un nombre.');
        return;
    }
    lista.push(amigo);
    limpiarCaja();
    console.log(lista);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

asignarTextoElemento('h2', 'Escriba el nombre de sus amigos.');