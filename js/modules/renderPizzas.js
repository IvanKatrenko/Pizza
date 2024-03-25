import { getData } from "./getData.js";
//work with article card
const createCard = (data) => {
    const card = document.createElement('article');
    card.classList.add('card', 'pizza__card');

    card.innerHTML = `
    <picture>
      <source srcset=${data.images[1]} type="image/webp">
      <img class="card__image" src=${data.images[0]} alt=${data.name.en}>
    </picture>
            

            <div class="card__content">
                <h3 class="card__title">${data.name['en'][0].toUpperCase()}${data.name['en'].slice(1).toLowerCase()}</h3>

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
    const pizzaList = document.querySelector('.pizza__list');
    pizzaList.textContent = '';

    const items = pizzas.map((data, index, arr) => {
        const item = document.createElement('li');
        item.classList.add('pizza__item');
        const card = createCard(data)
        item.append(card);
        return item;
    })
    pizzaList.append(...items);
};

