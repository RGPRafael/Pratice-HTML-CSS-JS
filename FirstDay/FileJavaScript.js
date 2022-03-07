/*The HTML DOM can be accessed with JavaScript (and with other programming languages).
In the DOM, all HTML elements are defined as objects.
The programming interface is the properties and methods of each object.
A property is a value that you can get or set (like changing the content of an HTML element).
A method is an action you can do (like add or deleting an HTML element).*/

function makeParagraphGreen(){
        const p = document.getElementById("myId"); //Adding Events Handlers
        //p.style.background-color = "green";
        //object.style.backgroundColor
    	//element.style.property = new style
        p.style.backgroundColor = "green";

}
