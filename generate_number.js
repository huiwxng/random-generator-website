const lowLimit = document.getElementById("lower-limit");
const highLimit = document.getElementById("upper-limit");
const numberButton = document.getElementById("number-btn");
const randomNumber = document.getElementById("random-number");

function randomInt(low, high) {
    return Number(Math.floor(Math.random() * (high - low + 1))) + Number(low);
}

numberButton.onclick = function () {
    let randInt = randomInt(lowLimit.value, highLimit.value);
    randomNumber.innerHTML = "Random Number: " + randInt;
}