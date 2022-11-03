const exampleConsoleLog = document.querySelector('#consoleLog');
exampleConsoleLog.addEventListener('click', (event) => {
    alert("Метод для вызова сообщения в веб-консоль");
});

const exampleAlert = document.querySelector('#alert');
exampleAlert.addEventListener('click', (event) => {
    alert("Метод для вызова модального окна с информацией");
})

const examplePrompt = document.querySelector('#prompt');
examplePrompt.addEventListener('click', (event) => {
    alert("Метод для отображения модального окна с текстовым полем для ввода текста");
});