    let mensajesOriginales = '';
    let mensajesEncriptados = '';
    let isEncriptado = false;

document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('textarea');
    const encriptar = document.getElementById('encriptar');
    const desencriptar = document.getElementById('desencriptar')
    const encriptados = document.getElementById('encriptados');
    const munecoLupa = document.getElementById('munecoLupa');
    const contador = document.getElementById('contador');
    const texto = document.getElementById('copyButton').innerHTML;


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
            console.log(mensajesOriginales);
            isEncriptado = false;
            actualizarMensajes();
        }
    });

    desencriptar.addEventListener('click', () => {
        mensaje = textarea.value;
        if (mensaje === mensajesEncriptados) {
            encriptados.innerHTML = mensajesOriginales;
            textarea.value = "";
            isEncriptado = true;
        } else {
            
        }

    })

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
            document.getElementById("menuEncriptadoH2").style.display = "none"
            document.getElementById("copyButton").style.display = "block";
        } else {
            munecoLupa.style.display = 'block';
        }
    }

});

function actualizarContadorMax() {
    const max = textarea.getAttribute('maxlength');
    const actual = textarea.value.length;
    
    contador.textContent = (max - actual) + ' caracteres restantes.';
}


const copiarContenido = async () => {
    try {
        let ultimoMensaje = mensajesEncriptados;
        if (isEncriptado === false) {
            await navigator.clipboard.writeText(ultimoMensaje);
            console.log("Funcionó")
        } else {
            ultimoMensaje = mensajesOriginales;
            await navigator.clipboard.writeText(ultimoMensaje);
            console.log("Funcionó")
        }

    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}




