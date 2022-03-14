
const counters  = document.querySelectorAll('.counter')
const search    = document.querySelectorAll('.search') 
const lupe      = document.querySelectorAll('.btm') 



function Counter(elemento){
    elemento.innerText = '0'

    function UpdateCounter(){
        const target = +elemento.getAttribute('data-target')
        const c =  +elemento.innerText
        const increment = target / 200
        //console.log(increment)
        //console.log(typeof target, target)
        if(c < target){
            elemento.innerText = `${Math.ceil(c + increment) }`
            setTimeout(UpdateCounter,1)
        }
        else{
            elemento.innerText = target
        }
    }
    UpdateCounter(elemento)

}
/*function UpdateCounter(elemento){
    console.log('UpdateCounter')
    const target = +elemento.getAttribute('data-target')
    const c =  +elemento.innerText
    const increment = target / 200
    //console.log(increment)
    //console.log(typeof target, target)
    if(c < target){
        elemento.innerText = `${Math.ceil(c + increment) }`
        setTimeout(UpdateCounter,1)
    }
    else{
        elemento.innerText = target
    }
}*/

counters.forEach(Counter)






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

  
