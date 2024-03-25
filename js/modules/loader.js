
const loader = document.createElement('div');
Loader.classList.add('loader');

const loaderSpinner = document.createElement('div');
loaderSpinner.classList.add('loader__spinner');

Loader.append(loaderSpinner);

export const showLoader = () => {
    document.body.append(loader);
}

export const hideLoader = () => {
    Loader.remove();
}