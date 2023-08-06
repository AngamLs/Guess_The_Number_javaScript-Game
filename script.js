'use strict';
//DOM Selection
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').texContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = Math.floor(Math.random() * 21);
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 21);

let score = 20;
let highscore = 0;

//create functions to reduce repeatition or refactor the codes
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    displayMessage('No Number!'); //calling the displayMessage function
    // guess is correct
  } else if (guess == secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Number is too high' : 'Number too low'

      displayMessage(
        guess > secretNumber ? 'Number is too high' : 'Number too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Adding refresh functionality in the Again button

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
