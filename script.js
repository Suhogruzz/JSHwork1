function GuessANumber() {
    var n = Math.floor(Math.random() * 1000);
    console.log(n);
    var attempts = 3
    while (attempts > 0) {
        let guess = prompt('Угадай число от 0 до 999', 0)
        switch(true) {
            case isNaN(guess):
                alert('Вводить надо только числа');
                break;
            case guess == n:
                if(confirm('Вы угадали! Закрыть страницу?')) {
                    window.close();
                }
                GuessANumber();
            case guess < n:
                attempts -= 1;
                alert(`Ваше число меньше загадонного. Осталось попыток: ${attempts}`);
                break;
            case guess > n:
                attempts -= 1;
                alert(`Ваше число больше загадонного Осталось попыток: ${attempts}`);
                break;
        };
    };
    if(confirm('Попытки кончились! Закрыть страницу?')) {
        window.close();
    } else {
        GuessANumber();
    };
};

GuessANumber();