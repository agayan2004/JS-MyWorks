{// svetafor
    let div = document.getElementsByTagName('div')
    div[2].style.backgroundColor = 'red'
    div[3].style.backgroundColor = 'white'
    div[4].style.backgroundColor = 'white'
    var audio = new Audio('audio/war.mp3');
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
}




{// budilnik
let div = document.getElementById('budilnik')
let button = document.getElementById('button')
let hour = document.getElementById('hour')
let minut = document.getElementById('minut')
let audio = new Audio('audio/budilnik.mp3')
let date = document.getElementById('num')
let btn = ''


button.addEventListener('click', function() {
    budilnik(hour.value, minut.value)
    hour.value = 0;
    minut.value = 0;
})

function budilnik(jam, rope) {
    if (jam < 25 && rope < 60) {
        date.innerHTML = (jam < 10 ? '0' + jam : jam)  + ':' + (rope < 10 ? '0' + rope : rope);
    }else {
        date.innerHTML = 'This is a not date'
    }
    let a = setInterval(() => {
        if (jam + ':' + rope == `${new Date().getHours()}:${new Date().getMinutes()}`) {
            audio.play();
            date.style.color == 'brown' ? date.style.color = 'white' : date.style.color = 'brown';
            if (btn == '') {
                btn = document.createElement('button')
                btn.innerHTML = 'STOP'
                div.append(btn)
                btn.addEventListener('click', function() {
                    clearInterval(a)
                    btn = '';
                })
            }
        }
    }, 1000);
}
}







{// X 0
let div = document.getElementById('kristiknolik')
let td = document.getElementsByTagName('td')
let user = document.getElementById('user')
let winn = document.getElementById('winner')
let button = document.getElementById('btn')
let user1 = 0;
let user2 = 0;
let game = true;
let winner = true;
let arr = [
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    ]


for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function() {
        if (td[i].innerHTML == '' && winner) {
            xo(td[i])
            win();
        }
    })
}


function xo(el) {
    if (game) {
        el.style.cursor = 'context-menu';
        el.innerHTML = 'X'
        game = false;
        user.innerHTML = 'user1'
        el.style.backgroundColor = '#84c02b'
    }else {
        el.style.cursor = 'context-menu';
        el.innerHTML = 'O'
        game = true;
        user.innerHTML = 'user2'
        el.style.backgroundColor = '#79d8d8'
    }
}


function win() {
    for(var i = 0; i < arr.length; i++){
        if(td[arr[i][0]].innerHTML == 'X' && td[arr[i][1]].innerHTML == 'X' && td[arr[i][2]].innerHTML == 'X'){
            ++user1;
            winn.innerHTML = 'Winner user1'
            document.getElementById('user1').innerHTML = user1.toString();
            winner = false;
        }else if(td[arr[i][0]].innerHTML == 'O' && td[arr[i][1]].innerHTML == 'O' && td[arr[i][2]].innerHTML == 'O'){
            ++user2;
            winn.innerHTML = 'Winner user2'
            document.getElementById('user2').innerHTML = user2.toString();
            winner = false
        }
    }
}

button.addEventListener('click', function() {
    restart()
})

function restart() {
    winn.innerHTML = 'Winner?';
    winner = true;
    user = 'Player';
    for (let i = 0; i < td.length; i++) {
        td[i].innerHTML = '';
        td[i].style.backgroundColor = ''
        td[i].style.cursor = 'pointer';
      }
}
}



{// Kalkulator
// let kalkulator = document.getElementById('kalkulator')
// let num1 = document.getElementById('num1')
// let num2 = document.getElementById('num2')
// let nish = document.querySelectorAll('.nish button')
// let nish1;
// let number1 = 0;
// let number2 = 0;


// num1.addEventListener('keyup', function() {
//     num2.value = num1.value
//     number1 = num1.value;
//     console.log(number2,number1);
// })
// for (let i = 0; i < nish.length; i++) {
//     nish[i].addEventListener('click', function() {
//         nish1 = nish[i].innerHTML
//         number1 == '' ? number1 = num1.value : number2 = num1.value
//         num1.value = ''
//         if (this.innerHTML == '=') {
//             pat()
//         }else if(this.innerHTML == 'C') {
//             num2.value = '0'
//         }else if (this.innerHTML == 'del') {
//             num2.split(num2.length -1)
//             number1 == 0 ? number1.split(number1.length -1) : number1.split(number1.length -1)
//         }else{
//             nish1 = this.innerHTML
//             num2.value +=  nish1
//             console.log(nish1);
//         }
//     })
// }

// function pat() {
//     if (nish1 == '+') {
//         num2.value = +number2 + +number1
//     }else if(nish1 == '-') {
//         num2.value = +number2 - +number1
//     }else if(nish1 == '*') {
//         num2.value = +number2 * +number1
//     }else if(nish1 == '/') {
//         num2.value = +number2 / +number1
//     }
// }











}




















