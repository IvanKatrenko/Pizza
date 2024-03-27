alert('Welcome to Go-Go Pizza!')

import { modalController } from './modules/modalController.js';
import { renderCart } from './modules/renderCart.js';
import { renderPizzas } from './modules/renderpizzas.js';
import { renderToppings } from './modules/renderToppings.js';
import { toppingsToggle } from './modules/toppingsToggle.js';


const init = () => {
    toppingsToggle();
    renderToppings()
    renderPizzas();
    modalController({ // works with modal
        modal: '.modal-cart',
        btnOpen: '.header__cart',
        btnClose: '.modal__close',
        cbOpen() { // works with modal
            renderCart();
        }
    });

    modalController({ // works with modal
        modal: '.modal-cart',
        btnOpen: '.hero__order',
        btnClose: '.modal__close',
        cbOpen() { // works with modal
            renderCart();
        }
    })
}

init();

