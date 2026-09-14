const cards = document.querySelectorAll('.proyecto-card');
const proyectoActual = document.getElementById('proyectoActual');

let currentIndex = 2;



function actualizarCarrusel() {

    cards.forEach((card, index) => {

        card.classList.remove(
            'active',
            'pos-prev-2',
            'pos-prev-1',
            'pos-next-1',
            'pos-next-2'
        );

        let posicion = index - currentIndex;

        if (posicion > 2) {
            posicion -= cards.length;
        }

        if (posicion < -2) {
            posicion += cards.length;
        }


        if (posicion === 0) {

            card.classList.add('active');

        }

        else if (posicion === -1) {

            card.classList.add('pos-prev-1');

        }

        else if (posicion === -2) {

            card.classList.add('pos-prev-2');

        }

        else if (posicion === 1) {

            card.classList.add('pos-next-1');

        }

        else if (posicion === 2) {

            card.classList.add('pos-next-2');

        }

    });



    if (proyectoActual) {

        proyectoActual.textContent =
            String(currentIndex + 1).padStart(2, '0');

    }

}


cards.forEach((card, index) => {

    card.addEventListener('click', () => {

        currentIndex = index;

        actualizarCarrusel();

    });

});


actualizarCarrusel();