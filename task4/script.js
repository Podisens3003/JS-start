const changeText = document.querySelector('a');
changeText.addEventListener('click', function(event) {
    let something = prompt('Введите какой-то текст', '');
    console.log(this)
    this.textContent = something;
});