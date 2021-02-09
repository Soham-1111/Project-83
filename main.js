




var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

width= screen.width;

new_width= screen.width -70;
new_height= screen.height -300;
if(width < 992){
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("line").value;
    last_position_of_x = e. touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e. touches[0].clientY- canvas.offsetTop;
    //Addictonal Activity ends

   
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_x; 
    last_position_of_y = current_position_of_y;
}


function cleararea(){
    ctx.clearRect( 0, 0, canvas.width, canvas.height);
    }


    var current_event="";
var last_position_x, last_position_y;

 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
current_event="mousedown";
color = document.getElementById("color").value;
width_of_line = document.getElementById("line").value;

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    
    if (current_event=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width_of_line;
     
     console.log("last_position_of_x=" + last_position_x + "last_position_of_y=" + last_position_y);
     ctx.moveTo(last_position_x, last_position_y);
     console.log("current_position_of_x=" + current_position_x + "current_position_of_y=" + current_position_y);
     ctx.lineTo(current_position_x, current_position_y);
     ctx.stroke();


    }
last_position_x= current_position_x;
last_position_y= current_position_y;

}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

    current_event="mouseleave";
}

canvas.addEventListener("mouseup" ,my_mouse_up);

function my_mouse_up(e){

    current_event="mouseup";
}