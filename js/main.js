// const texts = [
// "The average typing speed of a normal person is between 38 and 40 words per minute this means around 200 characters per minute. Nevertheless, professional typists, or professionals who spend a lot of their time writing texts on desktop devices, have a typing speed of 65 to 75 words per minute.",
// 'The typing test may only look like an innocent game, but there are attainable benefits that can result from constant practice with it. You can significantly improve your number of words per minutes and your accuracy until your fingers are capable of keeping pace with your thoughts.',
// 'Typing speed is a vital skill in this connected world. If you want to communicate with customers in real time, you have to be quick about it. Even if you are not the fastest typist now, you can easily improve. We created the typing text speed challenge to help you improve your typing speed and accuracy.'
// ]

const texts = ["this is Elon Musk"];

const keyboard = document.getElementById('keyboard');
const textHTML = document.getElementById('text');

let currentPosition = 0;
let textString;
let textArray = [];
let text;
let currentText;
let lastIndex;

let mistakes = 0,
    gachiHTML,
    mistakesHTML,
    speedHTML;

let gameIsOver = false,
    gameIsStart = false;

mistakesHTML = document.getElementById('mistakes');
speedHTML = document.getElementById('speed');
gachiHTML = document.getElementById('gachi');

 let speed = 0,
     taps = 0,
     timeOfTyping = 0;

//Курсор
const cursor = document.getElementById('cursor');

window.addEventListener('keydown', (button) => {
    if(!gameIsOver)
    {
        element = document.querySelector(`[data-index = '${currentPosition}']`);
        letterOnTextArea = document.querySelector(`[data-index = '${currentPosition}']`).dataset.value;
        indexOfLetterOnTextArea = document.querySelector(`[data-index = '${currentPosition}']`).dataset.index;

        
        //Правильно введено
        if(button.key.length < 2 && button.key == letterOnTextArea){
            letterRight(element);

            getRight(document.querySelector(`[data-letter = '${letterOnTextArea.toUpperCase()}']`));
            currentPosition++;

            //Підсунення курсора
            element.parentElement.removeChild(document.getElementById('cursor'))
            element.insertAdjacentHTML('afterend', '<div class="cursor" id="cursor"></div>');

            //Обрахунок швидкості набору
            taps++;

            //Старт гри якщо вона ще не почата
            gameIsStart = true;
        }
        //Неправильно введено
        else if(button.key.length < 2 && button.key != letterOnTextArea){
            letterWrong(element);
            getWrong(document.querySelector(`[data-letter = '${letterOnTextArea.toUpperCase()}']`));
            currentPosition++;
            
            //Підсунення курсора
            element.parentElement.removeChild(document.getElementById('cursor'))
            element.insertAdjacentHTML('afterend', '<div class="cursor" id="cursor"></div>');

            mistakes++;
            //mistakesHTML.innerHTML = mistakes;

            //Обрахунок швидкості набору
            taps++;

            //Старт гри якщо вона ще не почата
            gameIsStart = true;
        }
        else if (button.key == 'Backspace')
        {
            
            getActive(document.querySelector("[data-letter = 'Backspace']"));
            if(currentPosition > 0)
            {
                currentPosition--;
                element = document.querySelector(`[data-index = '${currentPosition}']`);

                letterNeutral(element);
                //Підсунення курсора
                element.parentElement.removeChild(document.getElementById('cursor'))
                element.insertAdjacentHTML('beforebegin', '<div class="cursor" id="cursor"></div>');

                
            }   
        }
    }
})

window.addEventListener('keydown', (button) => {
    let shift = document.querySelector("[data-letter = 'Shift']");
    if (button.key == 'Shift'){
        shift.classList.add('active')
        }
    else{
        shift.classList.remove('active')
    }
})



let velocity = []
let averageSpeed = 0;
let countOfVelocities = 0;
setInterval(()=>{
    
    if(timeOfTyping >= 6 && !gameIsOver && gameIsStart){
        console.log('d')
        speed = taps * 10;
        taps = 0;
        timeOfTyping = 0;
        speedHTML.innerHTML = `${speed} spm`;
        velocity.push(speed)
    }

    timeOfTyping++;
    
}, 1000)



