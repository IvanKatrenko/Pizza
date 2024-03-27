import { cartControl } from "./cartControl";
import { changeFirstUpperCase, createLabel, createRadioInput } from "./helpers";


//works with modal
export const renderModulePizza = (id, images, name, price, toppings) => {
    const modalPizzaMain = document.querySelector('.modal-pizza__main');
    modalPizzaMain.textContent = '';
    let size = Object.keys(price[0]);

    //picture modal <img class="modal__image" src="/img/Frame1.png" alt="with mushrooms">
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = images[1];
    source.type = 'image/webp';

    const img = document.createElement('img');
    img.classList.add('modal__image');
    img.src = images[0];
    img.alt= name.en;
    picture.append(source, img);

    //header modal <h3 class="modal__title">With mushrooms</h3>
    const title = document.createElement('h3');
    title.classList.add('modal__title');
    title.textContent = changeFirstUpperCase(name.en);

    // <p class="modal__description">Mushrooms, cheese, tomato, papryka, onion</p>
    const toppingsElement = document.createElement('p');
    toppingsElement.classList.add('modal__description');
    toppingsElement.textContent = changeFirstUpperCase(toppings.en);

    // <p class="modal__info">
    //     <span class="modal__price">490 zl</span>
    //     <span>/</span>
    //     <span class="modal__size">25 cm</span>
    // </p>
    // <form class="modal__form">
    const priceSizeInfo = document.createElement('p');
    priceSizeInfo.classList.add('modal__info');

    const priceElement = document.createElement('span');
    priceElement.classList.add('modal__price');
    const slashElement = document.createElement('span');
    slashElement.classList.add('modal__divider');
    const sizeElement = document.createElement('span');
    sizeElement.classList.add('modal__size');

    priceSizeInfo.append(priceElement, slashElement, sizeElement);

// price and size
const updatePrice = () => { 
    // selects the input element of the selected size
    const selectedSizeInput = form.querySelector('input[name="size"]:checked');
    size = selectedSizeInput.value;
    priceElement.textContent = `${price[size]} zl`;
    sizeElement.textContent = `${parseInt(size)} cm`;
}

    // <form class="modal__form"> and next fieldset and input,label
    const form = document.createElement('form');
    form.id=id;
    form.classList.add('modal__form');
    const groupFieldset = document.createElement('div');
    groupFieldset.classList.add('modal-pizza__group');

    const fieldsetCrust = document.createElement('fieldset');
    fieldsetCrust.classList.add('modal-pizza__fieldset');

    const thickInput = createRadioInput('modal-pizza__radio', 'thick', 'crust', 'thick');
    const thickLabel = createLabel('modal-pizza__label', 'thick', 'Thick crust');
    
    const thinInput = createRadioInput('modal-pizza__radio', 'thin', 'crust', 'thin');
    thinInput.checked = true;
    const thinLabel = createLabel('modal-pizza__label', 'thin', 'Thin dough');

    fieldsetCrust.append(thickInput, thickLabel, thinInput, thinLabel);

    const fieldsetSize = document.createElement('fieldset');
    fieldsetSize.classList.add('modal-pizza__fieldset');

    const sizeInputs = Object.keys(price).map(size => createRadioInput('modal-pizza__radio', 'size', size, 'size'));
    sizeInputs[0].checked = true;

    sizeInputs.forEach(input =>{
        const label = createLabel('modal-pizza__label', input.id, `${parseInt(input.value)} cm`);
        input.addEventListener('change', updatePrice)
        fieldsetSize.append(input, label);
    });

    const btnAddToCart = document.createElement('button');
    btnAddToCart.classList.add('modal__button');
    btnAddToCart.textContent = 'Add to cart';

    groupFieldset.append(fieldsetCrust, fieldsetSize);
    form.append(groupFieldset, btnAddToCart);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal__close');
    closeBtn.textContent = `

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14.8333" y="4" width="0.851136" height="15.3204" transform="rotate(45 14.8333 4)" fill="#C1AB91"/>
      <rect x="4" y="4.60181" width="0.851136" height="15.3204" transform="rotate(-45 4 4.60181)" fill="#C1AB91"/>
    </svg>
    
    `;

    modalPizzaMain.append(picture, title, toppingsElement, priceSizeInfo, form, closeBtn);

    updatePrice();

    let timerId = null;
    //add to cart !!!
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const product = { // product object
            carId: crypto.randomUUID(), // generate random id
            id,
            size: formData.get('size'), // get the value of the selected size
            crust: formData.get('crust'), // get the value of the selected crust
        };

        cartControl.btnAddToCart(product); // add to cart

        btnAddToCart.disabled = true;
        btnAddToCart.textContent = 'Added';

       timerId = setTimeout(() => { // 3 seconds delay
            btnAddToCart.disabled = false;
            btnAddToCart.textContent = 'Add to cart';
        }, 3000)
    });
    form.addEventListener('reset', () => { // reset button
        clearTimeout(timerId);
        btnAddToCart.disabled = false;
        btnAddToCart.disabled = 'Add to cart';
    })

}
// <form class="modal__form">
   
//     <div class="modal-pizza__group">
//         <fieldset class="modal-pizza__fieldset">
//             <input class="modal-pizza__radio" id="thick" name="crust" type="radio" value="thick">
//             <label class="modal-pizza__label" for="thick">Thick crust</label>

//             <input class="modal-pizza__radio" id="thin" name="crust" type="radio" value="thin" checked>
//             <label class="modal-pizza__label" for="thin">Thin dough</label>
//         </fieldset>

//         <fieldset class="modal-pizza__fieldset">
//             <input class="modal-pizza__radio" id="25cm" name="size" type="radio" value="25cm">
//             <label class="modal-pizza__label" for="25cm">25 cm</label>

//             <input class="modal-pizza__radio" id="30cm" name="size" type="radio" value="30cm" checked>
//             <label class="modal-pizza__label" for="30cm">30 cm</label>

//             <input class="modal-pizza__radio" id="35cm" name="size" type="radio" value="35cm" >
//             <label class="modal-pizza__label" for="35cm">35 cm</label>
//         </fieldset>
//     </div>

//     <button class="modal__button">Add to cart</button>

// </form>

// <button class="modal__close">
//     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="14.8333" y="4" width="0.851136" height="15.3204" transform="rotate(45 14.8333 4)" fill="#C1AB91"/>
//         <rect x="4" y="4.60181" width="0.851136" height="15.3204" transform="rotate(-45 4 4.60181)" fill="#C1AB91"/>
//     </svg>
// </button>