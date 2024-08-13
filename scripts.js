let mensajesOriginales = '';
let mensajesEncriptados = '';
let isEncriptado = false;

function normalizarTexto() {
    const textarea = document.getElementById('textarea');
    let texto = textarea.value;
    texto = texto.toLowerCase();
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    textarea.value = texto;
}

function validarEntrada() {
    const textarea = document.getElementById('textarea');
    const valor = textarea.value;
    const textoValido = valor.replace(/[^a-z\s]/g, '');
    if (valor !== textoValido) {
        textarea.value = textoValido;
    }
}

function actualizarContadorMax() {
    const textarea = document.getElementById('textarea');
    const max = textarea.getAttribute('maxlength');
    const actual = textarea.value.length;
    const contador = document.getElementById('contador');
    contador.textContent = (max - actual) + ' caracteres restantes.';
}

function actualizarMensajes() {
    const encriptados = document.getElementById('encriptados');
    if (mensajesEncriptados.length > 0) {
        encriptados.innerHTML = mensajesEncriptados;
        toggleVisibility(true);
    } else {
        encriptados.textContent = 'Ningún mensaje fue encontrado';
        toggleVisibility(false);
    }
}

function toggleVisibility(isVisible) {
    if (isVisible) {
        document.getElementById("hidden").style.display = "none";
        document.getElementById("menuEncriptadoH2").style.display = "none";
        document.getElementById("copyButton").style.display = "block";
    } else {
        document.getElementById("hidden").style.display = "block";
        document.getElementById("menuEncriptadoH2").style.display = "block";
        document.getElementById("copyButton").style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('textarea');
    const encriptar = document.getElementById('encriptar');
    const desencriptar = document.getElementById('desencriptar');
    const encriptados = document.getElementById('encriptados');
    const munecoLupa = document.getElementById('munecoLupa');
    const contador = document.getElementById('contador');

    encriptar.addEventListener('click', () => {
        let mensaje = textarea.value;
        if (mensaje) {
            mensajesOriginales = mensaje;
            mensaje = mensaje.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
            mensajesEncriptados = mensaje;
            textarea.value = "";
            isEncriptado = false;
            actualizarMensajes();
        }
    });

    desencriptar.addEventListener('click', () => {
        let mensaje = textarea.value;
        if (mensaje === mensajesEncriptados) {
            encriptados.innerHTML = mensajesOriginales;
            textarea.value = "";
            isEncriptado = true;
        } else {
            // Puedes agregar aquí la lógica para manejar el caso cuando el mensaje no coincide
        }
    });

    function actualizarMensajes() {
        if (mensajesEncriptados.length > 0) {
            encriptados.innerHTML = mensajesEncriptados;
            toggleVisibility(true);
        } else {
            encriptados.textContent = 'Ningún mensaje fue encontrado';
            toggleVisibility(false);
        }
    }

    function toggleVisibility(isVisible) {
        if (isVisible) {
            document.getElementById("hidden").style.display = "none";
            document.getElementById("menuEncriptadoH2").style.display = "none";
            document.getElementById("copyButton").style.display = "block";
        } else {
            munecoLupa.style.display = 'block';
        }
    }
});

const copiarContenido = async () => {
    try {
        let ultimoMensaje = isEncriptado ? mensajesOriginales : mensajesEncriptados;
        await navigator.clipboard.writeText(ultimoMensaje);
        console.log("¡Contenido copiado exitosamente!");
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
};
