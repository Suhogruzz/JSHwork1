function GuessANumber() {
    var attempts = 3
    while (attempts > 0) {
        let guess = prompt('Угадай число от 0 до 999', 0)
        switch(true) {
            case isNaN(guess):
                alert('Вводить надо только числа');
                break;
            case guess == n:
                if(confirm('Вы угадали! Закрыть страницу?')) {
                    return window.close();
                } else {
                    return document.location.reload();
                };
            case guess < n:
                attempts -= 1;
                alert(`Ваше число меньше загаданного. Осталось попыток: ${attempts}`);
                break;
            case guess > n:
                attempts -= 1;
                alert(`Ваше число больше загаданного Осталось попыток: ${attempts}`);
                break;
        };
    };
    if(confirm(`Попытки кончились! Загаданное число: ${n}  Закрыть страницу?`)) {
       return window.close();
    } else {
       return document.location.reload();
    };
};

var n = Math.floor(Math.random() * 1000);
console.log(n);

var start = document.querySelector('.start_button');
start.addEventListener('click', GuessANumber)