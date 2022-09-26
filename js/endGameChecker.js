window.addEventListener('keydown', (button) => {
    //Перевірка на кінець гри
    if(indexOfLetterOnTextArea == lastIndex && !gameIsOver && currentPosition - 1== lastIndex)
    {
        gameIsOver = true
        fixedHTML = document.getElementById('fixed')
        fixedHTML.classList.remove('wrong');
        fixedHTML.classList.add('right');
        fixedHTML.innerHTML = 'finish';
        //Кінець гри
        modal.classList.add('active');

        //Підрахунок середньої швидкості
        for(speed of velocity)
        {
            averageSpeed += speed;
            countOfVelocities++;
        }
        averageSpeed = Number((averageSpeed / countOfVelocities));

        //Підрахування виправлених помилок
        
        let m = document.querySelectorAll('.letterWrong')
        // for(let i = 0; i < m.length; i++) {
        //     if(m[i].classList.contains('letterWrong')) countM++;
        // }
        console.log(m);
        console.log(m.length)
        console.log(mistakes)
        fixedMistakes = mistakes - m.length; 

        //Функція нарахування статистики
        fillingStats();
    }
})