const createPhrase = (texts) => {


    textString = texts[Math.floor(Math.random() * texts.length)];
    for(let i = 0; i < textString.length; i++)
    {
        textArray[i] = textString[i];
    }
    textArray = textArray.map((el, index)=>{
        if(el == ' ')
            return `<div data-value="${el}" data-index="${index}">&nbsp</div>`;
        else
            return `<div data-value="${el}" data-index="${index}">${el}</div>`;
    })
    lastIndex = textArray.length-1;
    //-------------------------------------------------------------------------
    // for(const [index, symbol] of textArray.entries())
    // {
    
    //     if(symbol == '<div data-value=" " data-index="`${index}`>')
    //     {
    //         text += `</div><div data-index='${index}'>&nbsp</div><div class = "word">`;
    //     }
    // }
    for(const [index, el] of textArray.entries())
    {
        textHTML.insertAdjacentHTML('beforeend', textArray[index]);
    }
    console.log(textHTML);
}

createPhrase(texts);