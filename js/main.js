const texts = [
"The average typing speed of a normal person is between 38 and 40 words per minute this means around 200 characters per minute. Nevertheless, professional typists, or professionals who spend a lot of their time writing texts on desktop devices, have a typing speed of 65 to 75 words per minute.",
'The typing test may only look like an innocent game, but there are attainable benefits that can result from constant practice with it. You can significantly improve your number of words per minutes and your accuracy until your fingers are capable of keeping pace with your thoughts.',
'Typing speed is a vital skill in this connected world. If you want to communicate with customers in real time, you have to be quick about it. Even if you are not the fastest typist now, you can easily improve. We created the typing text speed challenge to help you improve your typing speed and accuracy.'
]

const keyboard = document.getElementById('keyboard');
const textHTML = document.getElementById('text');

let currentPosition = 0;
let text;
let currentText
// const createPhrase = (texts) => {
//     text = texts[Math.floor(Math.random() * texts.length)]
//     console.log(text)
    

//     let index = 0;
//     for(symbol of text)
//     {
//         let word =  document.createElement('div');
//         word.classList.add('word');
//         if(index == 0)
//         {
//             word.innerHTML += `<div data-index='${index}'>${symbol}</div>`;
//         }
        
//          if(symbol == ' ')
//         {
//             console.log(word);
//             word.innerHTML += `<div data-index='${index}'>&nbsp</div>`;
//             textHTML += word;
//             word.innerHTML = '';
//         }
//         else{
//             word.innerHTML += `<div data-index='${index}'>${symbol}</div>`;
//         }
//         index++;
//     }
// }

const createPhrase = (texts) => {
    text = texts[Math.floor(Math.random() * texts.length)]
    console.log(text)
    let index = 0;
    textHTML.innerHTML = `<div class = "word">`;
    for(symbol of text)
    {
    
        if(symbol == ' ')
        {
            textHTML.innerHTML += `</div><div data-index='${index}'>&nbsp</div><div class = "word">`;
        }
        else{
            textHTML.innerHTML += `<div data-index='${index}'>${symbol}</div>`;
        }
        index++;
        console.log(text)
    }
}

createPhrase(texts);

// ДОДАТИ АСИНХРОН


//Регулювання CapsLock
window.addEventListener("keyup",(event) => {

    if (event.getModifierState("CapsLock")) {
        document.getElementsByClassName('capsLock')[0].classList.add('active');
    } 
    else {
        document.getElementsByClassName('capsLock')[0].classList.remove('active');
    }
});

// console.log('\u{1F60D}')
const getRight = (button) => {
    button.classList.add('right')
    const int = setTimeout( () => {
    button.classList.remove('right')
    },1000)
} 

const getWrong = (button) => {
    button.classList.add('wrong')
    const int = setTimeout( () => {
        button.classList.remove('wrong')
    },1000)
}

const getActive = (button) => {
    button.classList.add('active')
    const int = setTimeout( () => {
        button.classList.remove('active')
    },1000)
}

window.addEventListener('keydown', (button) => {

    
    if(button.key.length < 2 && button.key != ' ')
    {    
        const butt = document.querySelector(`[data-letter="${button.key.toUpperCase()}"]`);

        if(butt.innerHTML.length < 2 && button.key == text.innerHTML[currentPosition]){
           getRight(butt);
            currentPosition++;
        }
        else if(butt.innerHTML.length < 2){
            getWrong(butt);
            currentPosition++;
        }
    }
    else if (button.key == ' ')
    {
        currentPosition++;
    }
    else if (button.key == 'Backspace')
    {
        const butt = document.querySelector(`[data-letter=${button.key}]`);
        console.log(butt)
        currentPosition--;
        getActive(butt);
    }
})

// document.addEventListener('keydown', (button) => {
//     console.log(button)
//     const butt = document.querySelector(`[data-letter="${button.key}"]`)
  
// })

