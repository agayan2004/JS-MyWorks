let div = document.getElementsByTagName('div')
div[2].style.backgroundColor = 'red'
var audio = new Audio('war.mp3');
let sec = 15;
let color = true;

setInterval(() => {
    if (sec >= 1 && div[2].style.backgroundColor == 'red') {
        if (sec == 1) {
            div[2].style.backgroundColor = 'white'
            div[3].style.backgroundColor = 'yellow'
            sec = 6;
            color = false
        }
    }else if(sec <= 5 && div[3].style.backgroundColor == 'yellow') {
        if (sec == 1) {
            if (color) {
                div[2].style.backgroundColor = 'red'
                div[3].style.backgroundColor = 'white'
            }else{
                div[4].style.backgroundColor = 'green'
                div[3].style.backgroundColor = 'white'
            }
            sec = 16;
        }
    }else if (sec >= 0 && div[4].style.backgroundColor == 'green') {
        if (sec == 1) {
            div[4].style.backgroundColor = 'white'
            div[3].style.backgroundColor = 'yellow'
            sec = 6;
            color = true;
        }
    }
    sec--;
    div[1].innerHTML = Number(sec)
    if (sec == 3) {
        audio.play();
    }
}, 1000);







































