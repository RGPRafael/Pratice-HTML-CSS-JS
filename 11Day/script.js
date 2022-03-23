
const textNumber  = document.getElementById("number")
console.log(textNumber)
const btn = document.getElementById('btn');
let rangeBar = document.getElementById('myRange');
let max = rangeBar.value;
var output = document.getElementById("demo");
output.innerHTML = max;


function getRandomInt() {
    let result = Math.floor(Math.random() * (max - 1)) + 2;
    console.log('result: ', result  , 'max: ', max );
    textNumber.textContent =  result;
    output.innerHTML = max;
}

btn.addEventListener('click', getRandomInt);

rangeBar.oninput = function() {
    max = this.value;
    //console.log('maxIN:', max);
    output.innerHTML = this.value;

}
