

//Нарахування статистики на кінець гри
const fillingStats = () => {
    let cooldownM = 100
    const mist = setInterval(()=>{
       
        if(Number(mistakesHTML.innerHTML) > 100)
        {
            cooldownM = 50
            
        }
        else if(Number(mistakesHTML.innerHTML) > 50)
        {
            cooldownM = 100
            mistakesHTML.innerHTML = Number(mistakesHTML.innerHTML) + randomNumber;
        }
        else if(Number(mistakesHTML.innerHTML) > 20)
        {
            cooldownM = 150
        }
        else if(Number(mistakesHTML.innerHTML) > 10)
        {
            cooldownM = 200
        }
        else if(Number(mistakesHTML.innerHTML) > 5)
        {
            cooldownM = 300
        }
        else cooldownM = 400

        mistakesHTML.innerHTML = Number(mistakesHTML.innerHTML) + 1;

        //Вихід із циклу
        if(mistakes == mistakesHTML.innerHTML){
            clearInterval(mist);
        }
    }, cooldownM);

    let cooldownSP = 10
    const sp = setInterval(()=>{
        // if(Number(speedHTML.innerHTML) < 100)
        // {
        //     cooldownSP = 50
            
        // }
        // else if(Number(speedHTML.innerHTML) < 50)
        // {
        //     cooldownSP = 100
        // }
        // else if(Number(speedHTML.innerHTML) < 20)
        // {
        //     cooldownSP = 150
        // }
        // else if(Number(speedHTML.innerHTML) < 10)
        // {
        //     cooldownSP = 200
        // }
        // else if(Number(speedHTML.innerHTML) < 5)
        // {
        //     cooldownSP = 300
        // }
        // else cooldownSP = 2000

        speedHTML.innerHTML = Number(speedHTML.innerHTML) + 1;
        console.log(Number(speedHTML.innerHTML))
        console.log(speed)
        //Вихід із циклу
        if(speed == Number(speedHTML.innerHTML)){
            clearInterval(sp);
        }
    }, cooldownSP);
    fixedMistakesHTML.innerHTML = fixedMistakes;
}