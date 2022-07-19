//Регулювання CapsLock
document.addEventListener("keyup",(event) => {

    if (event.getModifierState("CapsLock")) {
        document.getElementsByClassName('capsLock')[0].classList.add('active');
    } 
    else {
        document.getElementsByClassName('capsLock')[0].classList.remove('active');
    }
});

