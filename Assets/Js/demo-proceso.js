const btnproceso = document.querySelector(".demo-proceso");


btnproceso.addEventListener("click", proceso);

function proceso(event) {

    event.preventDefault();

Swal.fire({
    
    title: "⚠ DEMO EN DESARROLLO",
    html: `
        <p>Este proyecto todavía está en construcción.</p>
        <p style="color: #00aaff;">
            > PRÓXIMAMENTE DISPONIBLE...
        </p>
    `,
    icon: "info",
    confirmButtonText: "CONTINUAR",
    confirmButtonColor: "#00aaff",
    background: "#061426",
    color: "#d9f4ff"
});
}
