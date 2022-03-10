
/* trazer todo mundo, trazer os circulos, trazer a barra de progress, trazer os bottoms */
const circulos  = document.querySelectorAll('.block')
const prev      = document.getElementById('prev')
const next      = document.getElementById('next')
const progBar   = document.getElementsByClassName("progressBar")

const search    = document.querySelectorAll('.search') 
const lupe      = document.querySelectorAll('.btm') 

console.log(progBar)
console.log('lupe:', lupe)
console.log('search',search)

let button = false
lupe[0].addEventListener('click',extendSearchBar)

function extendSearchBar(){
    updateBar()
}

function updateBar(){
    if(!button){
        for (var i = 0, len = search.length; i < len; i++) {
            search[i].classList.add("active")
        }
        button = true
    }
    else{
        for (var i = 0, len = search.length; i < len; i++) {
            search[i].classList.remove("active")
        }
        button = false
    }

}

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
            console.log(i , currentActive)

        }
    }
}   


/* agora voce precisa atualizar o DOM ou seja mudar a barra de progresso e os estados dos circulos 

circle classlist add active
and circle classlist remove active

fazer a barra atualizar o width width = (actives length - 1) / (circles.length - 1) * 100 + % */
