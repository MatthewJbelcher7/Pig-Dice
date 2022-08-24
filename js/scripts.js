function getRandomNumber(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Player(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

function Player2(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

function score(diceValue) {
  let currentScoreSum = 0; 
  let currentScoreArray = [];
  for (let i= 0; i < diceValue.length; i++) {
    currentScoreArray.push([i]);
  }
  for (let i = 0; i < currentScoreArray.length; i++) {
    currentScoreSum += currentScoreArray[i]
  } 
  return 
} 

let diceValue = getRandomNumber();

// scoreOneArray.push(parseInt(getRandomNumber()));
// scoreTwoArray.push(parseInt(getRandomNumber()));
// const scoreOneArray = [];
// const scoreTwoArray = [];

// function score1() {
// 
//   for (i = 0; i < currentScoreArray.length; i++) {
//     currentScoreSum += currentScoreArray[i]
//   }
//   return sum;
// };

// function score2() {
//   let sum = 0 
//   for (i = 0; i < scoreTwoArray.length; i++) {
//     sum += scoreTwoArray[i]
//   }
//   return sum;
// };

// function Player1() {
//   this.score = score1();

// }
const rollButton = document.getElementById("roll-dice");
rollButton.addEventListener("click", getRandomNumber);

function pushRandomNumber() {
  document.getElementById("roll-dice").onclick = getRandomNumber();
  return document.getElementsByClassName(".player-one-score").innerText = randomNumber;
} 