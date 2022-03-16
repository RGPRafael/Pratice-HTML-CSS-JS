// node list...

const selectors = document.querySelectorAll('.panel') 
const images = document.querySelectorAll('img') 
const body = document.getElementsByTagName("body")


function Changebackground(number){
    if(number == 1 ){
        console.log('changeback ground');
        document.body.style.backgroundColor = "green";
    }
    else if( number == 2){
        console.log('other background');
        document.body.style.backgroundColor  = "#d11717";
    }
    else if(number == 3){
        document.body.style.backgroundColor  = "#c7d31a";
    }

}