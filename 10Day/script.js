
const textNumber  = document.getElementById("number")
console.log(textNumber)
const btn = document.getElementById('btn');


function getRandomInt() {
    let result = Math.floor(Math.random() * (100 - 2)) + 2;
    console.log(result)
    textNumber.textContent =  result;

}

btn.addEventListener('click', getRandomInt);

getRandomInt(min,max);