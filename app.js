let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroUsuario));
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acerto el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {        
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCampos();
    }
    return;
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumeroSorteado);
    // Si ya sorteamos todos los números 
    if (listaNumeroSorteado.length >= numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado esta incluido en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function limpiarCampos() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCampos();
    /* Indicar mensaje de intervalo de números
     * Generar el número aleatorio
     * Inicializar el número intentos
    */
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();