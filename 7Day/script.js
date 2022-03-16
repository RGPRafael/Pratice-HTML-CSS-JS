const boxes = document.querySelectorAll(".block")
console.log(boxes)
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const trigger = window.innerHeight/ 5 * 4
    
    for (var i = 0, len = boxes.length; i < len; i++) {
        const boxtop = boxes[i].getBoundingClientRect().top
        if(boxtop < trigger){
            boxes[i].classList.add('show')
        }
        else{
            boxes[i].classList.remove('show')
        }
    }
}