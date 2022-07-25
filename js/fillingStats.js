

//Нарахування статистики на кінець гри
const fillingStats = () => {
    const mist = setInterval(()=>{
        let randomNumber = Math.ceil(Math.random() * 3) //Рандомне число від 1 до 3
        if( ( Number(mistakesHTML.innerHTML) + randomNumber) < mistakes )
        {
            mistakesHTML.innerHTML = Number(mistakesHTML.innerHTML) + randomNumber;
        }
        else if(( Number(mistakesHTML.innerHTML) + (randomNumber - 1)) < mistakes)
        {
            randomNumber--;
            mistakesHTML.innerHTML = Number(mistakesHTML.innerHTML) + randomNumber;
        }
        else if(( Number(mistakesHTML.innerHTML) + 1) == mistakes)
        {
            mistakesHTML.innerHTML = Number(mistakesHTML.innerHTML) + 1;
            clearInterval(mist)
        }

        //Вихід із циклу
        if(mistakes == mistakesHTML.innerHTML){
            console.log('mistakes complete')
            clearInterval(mist);
        }
    }, 500);

    const sp = setInterval(()=>{
        let randomNumber = Math.ceil(Math.random() * 8) //Рандомне число від 1 до 8
        if( ( Number(speedHTML.innerHTML) + randomNumber) < averageSpeed )
        {
            speedHTML.innerHTML = Number(speedHTML.innerHTML) + randomNumber;
        }
        else if(( Number(speedHTML.innerHTML) + 5) < averageSpeed)
        {
            randomNumber = 5;
            speedHTML.innerHTML = Number(speedHTML.innerHTML) + randomNumber;
        }
        else if(( Number(speedHTML.innerHTML) + 1) == averageSpeed)
        {
            speedHTML.innerHTML = Number(speedHTML.innerHTML) + 1;
            clearInterval(sp);
        }

        //Вихід із циклу
        if(speed == speedHTML.innerHTML){
            console.log('speed complete')
            clearInterval(sp);
        }
    }, 300);
}