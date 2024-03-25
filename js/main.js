import { renderPizzas } from './modules/renderpizzas.js';
import { renderToppings } from './modules/renderToppings.js';
import { toppingsToggle } from './modules/toppingsToggle.js';


const init = () => {
    toppingsToggle();
    renderToppings()
    renderPizzas();
}

init();