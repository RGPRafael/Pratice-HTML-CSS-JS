//var clone       = document.querySelector('.naruto');
var clone = document.querySelectorAll('.naruto');
var container   = document.querySelector('.container');
var child_of_container = container.childElementCount;
console.log(child_of_container)


var cont = 0;
function teste(){
    console.log("kage bushin " + cont);
    cont += 1;
    let div = document.createElement('div');
    div.classList.add('naruto');
    container.appendChild(div);
    console.log(container.innerHTML);
    console.log(container.childElementCount)
    div.addEventListener('click', teste);

}

if( container.childElementCount > 1){
    console.log('if' + clone.length);

    for(let i = 0 ; i < clone.length; i++){
        clone[i].addEventListener('click', teste);
    }
    clone = document.querySelectorAll('.naruto');
}
else{
    console.log(clone.length + 'else');
    clone[0].addEventListener('click', teste);    
}
