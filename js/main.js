const texts = [
"The average typing speed of a normal person is between 38 and 40 words per minute (this means around 190-200 characters per minute). Nevertheless, professional typists, or professionals who spend a lot of their time writing texts on desktop devices, have a typing speed of 65 to 75 words per minute.",
'The typing test may only look like an innocent game, but there are attainable benefits that can result from constant practice with it. You can significantly improve your number of words per minutes and your accuracy until your fingers are capable of keeping pace with your thoughts.',
'Typing speed is a vital skill in this hyper-connected world. If you want to communicate with customers in real time, you have to be quick about it. Even if you aren’t the fastest typist now, you can easily improve! We created the typing text speed challenge to help you improve your typing speed and accuracy.'
]

const keyboard = document.getElementById('keyboard');

document.addEventListener('keydown', (button) => {
    console.log(button.key)
    const butt = document.querySelector(`[data-letter="${button.key}"]`)
    console.log(butt)
    butt.classList.add('right')
    let step = 0
    let timer = setInterval(()=>{
        step++;
        if(step >= 1)
        {
            clearInterval();
            butt.classList.remove('right')
        }
    },1000)
})

let a = [1, 3, 4]

let currentPosition = 0;
const area = document.getElementById('text');

const randomText = (text) => {
    return texts[Math.floor(Math.random() * texts.length)]
}
area.innerHTML = randomText()
console.log('\u{1F60D}')

