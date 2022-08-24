function getRandomNumber(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

scoreOneArray.push(parseInt(getRandomNumber()));
scoreTwoArray.push(parseInt(getRandomNumber()));
const scoreOneArray = [];
const scoreTwoArray = []

function Score1() {
  let sum = 0 
  for (i = 0; i < scoreOneArray.length; i++) {
    sum += scoreOneArray[i]
  }
  return sum;
}