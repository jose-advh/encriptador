document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('textarea');
    const encriptar = document.getElementById('encriptar');
    const encriptados = document.getElementById('encriptados');
    const munecoLupa = document.getElementById('munecoLupa');
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
            encriptados.textContent = mensajesEncriptados.join('');
            toggleVisibility(true)
        } else {
            encriptados.textContent = 'Ningún mensaje fue encontrado';
            toggleVisibility(false)
        }
    }

    function toggleVisibility(isVisible) {
        if (isVisible) {
            document.getElementById("hidden").style.display = "none";
        } else {
            munecoLupa.style.display = 'block';
        }
    }

});



