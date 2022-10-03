let player = true;
let isWinnerWin = true;
let td = document.getElementsByTagName('td');
let title = document.querySelector('h2');
let reset = document.getElementById('reset');
let winnerCell = [];
winner();


for (let i = 0; i < td.length; i++) {
  td[i].addEventListener('click', function() {
    if (this.innerHTML === '' && isWinnerWin) {
      setImage(i, this);
    }
  })
}

reset.addEventListener('click', function() {
  winner();
  player = true;
  isWinnerWin = true;
  title.innerHTML = 'Player 1';
  for (let i = 0; i < td.length; i++) {
    td[i].innerHTML = '';
  }
})

function setImage(index, el) {
  if (winnerCell.includes(index)) {
    el.innerHTML = '<img src="./images/gold.jpg" alt="">';
    isWinnerWin = false;
    alert('You win...')
  } else {
    el.innerHTML = '<img src="./images/bomb.png" alt="">';
  }
  if (player) {
    title.innerHTML = 'Player 2';
    player = !player;
  } else {
    title.innerHTML = 'Player 1';
    player = !player;
  }
}

function winner() {
  winnerCell = [
    Math.floor(Math.random() * 25),
    Math.floor(Math.random() * 25),
    Math.floor(Math.random() * 25),
  ];
}

// let button = document.getElementById('btn');

// console.log(button.hasAttribute('name'));
// console.log(button.hasAttribute('class'));
//
// button.setAttribute('class', 'test');
// button.setAttribute('lang', 'en');
//
// console.log(button.getAttribute('name'));
//
// button.removeAttribute('lang');

// console.log(button.attributes);
// console.log(button.attributes['id'].value);

// console.log(button.className);
// console.log(button.classList.length);

// console.log(button.classList.item(0));
// button.classList.add('hello');
// button.classList.remove('hhh');
// console.log(button.classList.contains('hhh'));
// console.log(button.classList.toggle('hhh'));
