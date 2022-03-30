var ball = document.querySelector('.ball');


let max = 7;
let min = 1;
var ball_styles = window.getComputedStyle(ball);
var scale = ball_styles.getPropertyValue('scale')
//console.log('scale : ' , scale, typeof(scale));
let count = parseInt(scale);
//console.log(typeof(count));
let BiggerOneTime = false;


function teste(){
    // console.log('printando' + count);
    if (count < max && !BiggerOneTime){
        //console.log('if count' + count);
        count = count + 1;
        ball.style.scale = count ;
        //console.log(ball_styles.getPropertyValue('scale'));
    }
    else if ( count >= max ) {
        //console.log('2 if count' + count);
        BiggerOneTime = true;
        count = count - 1;
    }
    else if (BiggerOneTime && count > min ) {
        //console.log('3 if count' + count);
        count = count - 1;
        ball.style.scale = count ;
    }
    else{
        console.log('4 count' + count);
        BiggerOneTime = false;
    }

}
ball.addEventListener('click', teste);
