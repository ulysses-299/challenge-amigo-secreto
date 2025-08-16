// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo == ''){
        alert('Por favor, escribe un nombre.');
        return;
    }
    if (lista.includes(amigo)){
        alert('Ese nombre ya está en la lista.');
        return;
    }
    lista.push(amigo);
    limpiarCaja();
    mostrarLista();
    console.log(lista);
}

function mostrarLista(){
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    lista.forEach(nombre=> {
        let li = document.createElement('li');
        li.textContent = nombre;
        li.setAttribute('role', 'listitem');
        ul.appendChild(li);
    })
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

asignarTextoElemento('h2', 'Escriba el nombre de sus amigos.');