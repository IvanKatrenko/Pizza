
//works with modal
export const renderModulePizza = (id, images, name, price, toppings) => {
    const modalPizzaMain = document.querySelector('.modal-pizza__main');
    modalPizzaMain.textContent = '';
    let size = Object.keys(price[0]);

    //picture modal
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = image[1];
    source.type = 'image/webp';

    const img = document.createElement('img');
    img.classList.add('modal__image');
    img.src = images[0];
    img.alt= name.en;

    picture.append(source, img);

    //header modal
    const title = document.createElement('h3');
    title.classList.add('modal__title');
    title.textContent = name.en[0].toUpperCase() + name.en.slice(1).toLowerCase() ;

    modalPizzaMain.append(picture,title);

}

// <img class="modal__image" src="/img/Frame1.png" alt="with mushrooms">
// <h3 class="modal__title">With mushrooms</h3>

// <p class="modal__description">Mushrooms, cheese, tomato, papryka, onion</p>

// <p class="modal__info">
//     <span class="modal__price">490 zl</span>
//     <span class="modal__divider">/</span>
//     <span class="modal__size">25 cm</span>
// </p>
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