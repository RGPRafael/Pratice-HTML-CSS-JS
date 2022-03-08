// node list...

const selectors = document.querySelectorAll('.image') // nao esta removendo nem clicando ....
console.log(selectors)
//alert(p.length);
for (var i = 0, len = selectors.length; i < len; i++) {
    //work with checkboxes[i]
    selectors[i].addEventListener('click',getSelection)
}    


function getSelection() {
    removeActiveClasses()
    //var value = this.options[this.selectedIndex].value;
    this.classList.add("active");
}
function removeActiveClasses(){
    for (var i = 0, len = selectors.length; i < len; i++) {
        selectors[i].classList.remove("active")
        //console.log('na funcao')

    }
}