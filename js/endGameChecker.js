window.addEventListener('keydown', (button) => {
    //Перевірка на кінець гри
    if(indexOfLetterOnTextArea == lastIndex)
    {
        gachiHTML = document.getElementById('gachi')
        gachiHTML.classList.remove('wrong');
        gachiHTML.classList.add('right');
        gachiHTML.innerHTML = 'finish';
        gameIsOver = true;
        //Кінець гри
        modal.classList.add('active');

        //Підрахунок середньої швидкості
        for(speed of velocity)
        {
            averageSpeed += speed;
            countOfVelocities++;
        }
        averageSpeed = Number((averageSpeed / countOfVelocities));
        console.log(averageSpeed)

        //Функція нарахування стати
        fillingStats();
    }
})