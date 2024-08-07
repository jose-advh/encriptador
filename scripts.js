document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('textarea');
    const encriptar = document.getElementById('encriptar');
    const encriptados = document.getElementById('encriptados')
    let mensajesOriginales = [];
    let mensajesEncriptados = [];

    encriptar.addEventListener('click', () => {
        let mensaje = textarea.value;
        if (mensaje) {
            mensajesOriginales.push(mensaje);
            mensaje = mensaje.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
            mensajesEncriptados.push(mensaje);
            textarea.value = "";
            console.log(mensajesOriginales);
            console.log(mensajesEncriptados);

            actualizarMensajes();
        }
    });

    function actualizarMensajes() {
        if (mensajesEncriptados.length > 0) {
            encriptados.textContent = mensajesEncriptados.join(', ');
        } else {
            encriptados.textContent = 'Ningún mensaje fue encontrado';
        }
    }

});

