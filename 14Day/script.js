console.log('some dumb text')
document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
var canvas =  document.querySelector('canvas');
var div    = document.querySelector('div');
var wv = window.visualViewport;
console.log(wv);
console.log(wv.height);
console.log(wv.width);

let scroller = document.scrollingElement;
console.log('sc: ' + scroller.offsetWidth);
canvas.width = wv.width ;
canvas.height = wv.height;
var Othercontext =  canvas.getContext("2d");


function Circle(x, y, dx, dy ,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.draw = function(){
        //console.log('Circle Create');
        Othercontext.beginPath();
        Othercontext.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        Othercontext.fillStyle = "pink";
        Othercontext.stroke();
    
    }
    this.update = function(){
        if( this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if( this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy; 
        }    
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw();
    }
}

var arrayArc = [];
for(var i = 0; i < 9; i++){
    var radius =  30;
    var dx = Math.random() - 0.5 * 10;
    var dy = Math.random() - 0.5 * 10;
    var x =  Math.random() *  
    ( window.innerWidth - radius *2) + radius;
    var y =  Math.random() * 
    ( window.innerHeight - radius *2) + radius;
    var new_circle = new Circle(x,y,dx,dy,radius);
    arrayArc.push(new_circle);
}

console.log(arrayArc.length);

function Animate(){
    requestAnimationFrame(Animate);
    Othercontext.clearRect(0,0,window.innerWidth,window.innerHeight);
    for(var i = 0; i < arrayArc.length; i++){
        arrayArc[i].update();
    }


}
Animate();

