const letterRight = (button) => {
    button.classList.add('letterRight')
}

const letterWrong = (button) => {
    button.classList.add('letterWrong')
}

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
const letterNeutral = (button) => {
    button.classList.remove('letterWrong');
    button.classList.remove('letterRight');
}