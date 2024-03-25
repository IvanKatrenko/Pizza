// works with toppings(open and close)
const toppingsToggle = () => {
    const toppingsClose = document.querySelector('.toppings__close');
    const toppingsList = document.querySelector('.toppings__list');

    toppingsClose.addEventListener('click', () => {
        if (!toppingsList.classList.contains('toppings__list_show')) {
            toppingsList.classList.add('toppings__list_show');
            toppingsClose.classList.add('toppings__close_active');

            toppingsList.style.maxHeight = toppingsList.scrollHeight + 'px';
        } else {
            toppingsList.classList.remove('toppings__list_show');
            toppingsClose.classList.remove('toppings__close_show');
            toppingsClose.classList.remove('toppings__close_active');
            toppingsList.style.maxHeight = null;

            setTimeout(() => {
                toppingsList.style.remove('toppings__list_show');
            }, 300)
        }
    });
};

// works with toppings__list(show and hide)
const getPizzas = async () => {
    try {
        const response = await fetch('');
        if (!response.ok) {
            throw new Error(`Error fetching pizza products: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log(`Error fetching pizza products: ${error}`);
    }
}

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

const renderPizzas = async () => {
    const pizzas = await getPizzas();
    const pizzaList = document.querySelector('.pizza__list');
    pizzaList.textContent = '';

    const items = pizzas.map((data, index, arr) => {
        const item = document.createElement('li');
        item.classList.add('pizza__item');
        item.textContent = data.name.en

        const card = createCard(data)
        item.append(card);
        return item;
    })
    pizzaList.append(...items);
}

const init = () => {
    toppingsToggle();

    renderPizzas();
}

init();