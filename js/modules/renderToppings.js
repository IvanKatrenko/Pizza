import { getData } from "./getData.js";

export const renderToppings = async () => {
    const { en: enToppings, ru: ruToppings } = await getData('https://go-go-pizza-api-9xdt.onrender.com/api/toppings');
    const toppingsList = document.querySelector('.toppings__list');
    toppingsList.textContent = '';

    const items = enToppings.map((enName, i) => {
        const item = document.createElement('li');
        item.classList.add('toppings__item');
        item.innerHTML = `

        <input class="toppings__checkbox" id="${enName}" name="topping" type="checkbox" value="${enName}">
        <label class="toppings__label" for="${enName}">${enToppings[i][0].toUpperCase()}${ruToppings[i].slice(1).toLowerCase()}
        }</label >

        `;

        return item;

    })
    toppingsList.append(...items);

    // reset button click
    const itemReset = document.createElement('li');
    itemReset.classList.add('toppings__item');
    const btnReset = document.createElement('button');
    btnReset.classList.add('toppings__reset');
    btnReset.textContent = 'Reset';
    btnReset.type = 'reset';

    itemReset.append(btnReset);

    const toppingsForm = document.querySelector('.toppings__form');

    toppingsForm.addEventListener('change', (event) => {
        const formData = new FormData(toppingsForm);

        for (const item of formData.entries()) {
            console.log(item);
        }

    });

}