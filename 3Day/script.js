
/* trazer todo mundo, trazer os circulos, trazer a barra de progress, trazer os bottoms */
const circulos  = document.querySelectorAll('.block')
const prev      = document.getElementById('prev')
const next      = document.getElementById('next')
const progBar   = document.getElementsByClassName("progressBar")

console.log(circulos)
console.log(prev)
console.log(next)
console.log(progBar)

let currentActive = 0

/* ouvir o click do bottom que avanca e criar uma variavel para  incrementar vc precisa checar se nao passa
do numero de circulos disponiveis , o mesmo para o prev */

next.addEventListener('click',nextSelection)   


function nextSelection() {
    currentActive++;
    if (currentActive > circulos.length) {
        currentActive = circulos.length
    }
    update()
}

prev.addEventListener('click',prevSelection)   

function prevSelection() {
    currentActive--;
    if (currentActive < 1){
        currentActive = 0
    }
    update()

}

function update(){
    console.log(currentActive)
    for (var i = 0, len = circulos.length; i < len; i++) {
        if( i < currentActive){
            circulos[i].classList.add("active")
        }
        else{
            circulos[i].classList.remove("active")

        }
    }
}   


/* agora voce precisa atualizar o DOM ou seja mudar a barra de progresso e os estados dos circulos 

circle classlist add active
and circle classlist remove active

fazer a barra atualizar o width width = (actives length - 1) / (circles.length - 1) * 100 + % */
