
'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber  = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);

  //No  Input
  if(!guess){
    showMessage("No Number!");
  
    //Player Wins
  }else if (guess === secretNumber) {
    showMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  }else if(guess !== secretNumber) {
     if (score > 0) {
      showMessage(guess > secretNumber? "Too High!" : "Too Low!")
      score--;
      document.querySelector('.score').textContent = score;
    }else {
      showMessage("You Lost The Game!");
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    showMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
