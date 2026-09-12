const pantallaCarga = document.getElementById("pantalla-carga");
const portfolio = document.getElementById("portfolio");

const progressFill = document.getElementById("progress-fill");
const porcentaje = document.getElementById("porcentaje");

let progress = 0;

const loadingInterval = setInterval(() => {

    progress++;

    progressFill.style.width = `${progress}%`;
    porcentaje.textContent = `${progress}%`;

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            pantallaCarga.style.display = "none";
            portfolio.style.display = "block";

        }, 300);

    }

}, 30);