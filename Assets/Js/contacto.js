const formularioContacto = document.getElementById("formularioContacto");

formularioContacto.addEventListener("submit", async function (e) {

    e.preventDefault();

    const boton = formularioContacto.querySelector(".btn-contacto");

    boton.disabled = true;

    boton.innerHTML = `
        ENVIANDO...
        <i class="fa-solid fa-spinner fa-spin"></i>
    `;

    try {

        const respuesta = await fetch(formularioContacto.action, {
            method: "POST",
            body: new FormData(formularioContacto),
            headers: {
                "Accept": "application/json"
            }
        });


        if (respuesta.ok) {

            Swal.fire({
                title: "¡MENSAJE ENVIADO!",
                text: "Gracias por contactarme. Te responderé lo antes posible.",
                icon: "success",
                confirmButtonText: "ACEPTAR",
                confirmButtonColor: "#00aaff",
                background: "#061426",
                color: "#d9f4ff"
            });

            formularioContacto.reset();

        } else {

            Swal.fire({
                title: "ERROR",
                text: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
                icon: "error",
                confirmButtonText: "ACEPTAR",
                confirmButtonColor: "#00aaff",
                background: "#061426",
                color: "#d9f4ff"
            });

        }

    } catch (error) {

        Swal.fire({
            title: "ERROR",
            text: "Ocurrió un problema al enviar el mensaje.",
            icon: "error",
            confirmButtonText: "ACEPTAR",
            confirmButtonColor: "#00aaff",
            background: "#061426",
            color: "#d9f4ff"
        });

    }


    boton.disabled = false;

    boton.innerHTML = `
        ENVIAR MENSAJE
        <i class="fa-solid fa-paper-plane"></i>
    `;

});