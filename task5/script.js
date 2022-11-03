let form = document.querySelector('form');
let input = document.querySelector('input');
let p = document.querySelector('#duplicateField');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
    const inputValue = input.value;
    p.textContent = inputValue;
    input.value = null;
});
