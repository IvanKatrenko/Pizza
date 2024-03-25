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