import { getData } from "./getData.js";
import { changeFirstUpperCase } from "./helpers.js";
import { modalController } from "./modalController.js";
import { renderModulePizza } from "./renderModulePizza.js";

//pizza is being formed

const btnReset = document.querySelector('button');
btnReset.classList.add('pizza__reset-toppings');
btnReset.textContent = 'Reset filtr';
btnReset.type = 'reset';
btnReset.setAttribute('form', 'toppings')

//work with article card
const createCard = (data) => {
    const card = document.createElement('article');
    card.classList.add('card', 'pizza__card');

    card.innerHTML = `
    <picture>
      <source srcset="${data.images[1]}" type="image/webp">
      <img class="card__image" src="${data.images[0]}" alt="${data.name.en}">
    </picture>
            
            <div class="card__content">
                <h3 class="card__title">${changeFirstUpperCase(data.name['en'])}
</h3>

                <p class="card__info">
                  <span class="card__price">${data.prices['25cm']}</span>
                  <span>/</span>
                  <span class="card__weight">25 cm</span>
                </p>
  
                <button class="card__button" data-id="${data.id}">Choose</button>
            </div>

    `;
    return card;
}

export const renderPizzas = async (toppings) => {
    const pizzas = await getData(
        `https://go-go-pizza-api-9xdt.onrender.com/api/products${toppings ? ` ? toppings = ${toppings}` : ''
        }`,
    );
    const pizzaTitle = document.querySelector('.pizza__title');
    const pizzaList = document.querySelector('.pizza__list');
    pizzaList.textContent = '';

    if (pizzas.length) {
        pizzaTitle.textContent = 'Pizza';
        btnReset.remove();
        const items = pizzas.map((data) => {
            const item = document.createElement('li');
            item.classList.add('pizza__item');
            const card = createCard(data)
            item.append(card);
            return item;
        })

        pizzaList.append(...items);

        modalController({
            modal: '.modal-pizza',
            btnOpen: '.card__button',
            btnClose: '.modal__close',
            async cbOpen(btnOpen) {
                const pizza = await getData(
                    `https://go-go-pizza-api-9xdt.onrender.com/api/products/${btnOpen.dataset.id}`,
                );
                renderModulePizza(pizza);
            }
        })
    } else {
        pizzaTitle.textContent = 'We dont have such pizza';
        pizzaTitle.after(btnReset);

    }

};

btnReset.addEventListener('click', () => {
    renderPizzas();
    document.querySelector('.toppings__reset').remove();
})

