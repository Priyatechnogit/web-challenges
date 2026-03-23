console.clear();

const inputField = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', ()  => {
    inputField.value = inputField.value.toUpperCase();
    });