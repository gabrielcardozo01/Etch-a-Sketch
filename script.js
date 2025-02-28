const container = document.querySelector(".container");
const buttonSize = document.querySelector("#buttonSize");
const buttons = document.querySelectorAll("button");
var slider = document.getElementById("myRange");

let click = false;

let gridHeight,gridWidth;
let color='black';
let opacity=100;

slider.oninput = function() {
    opacity = this.value/100;
  } 

function createGrid(gridWidth,gridHeight){     
    const totalCells = gridWidth * gridHeight; 
    container.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    for (i=0;i<totalCells;i++){
        const content = document.createElement("div");
        container.appendChild(content);
    }
}
function cleanScreen(){let pixels = document.querySelectorAll('div'); 
    pixels.forEach((element) => element.style.background= 'white');};

buttonSize.addEventListener('click',()=>{gridHeight = prompt("put the height");
    cleanScreen();
    gridWidth = prompt("put the width");
    createGrid(gridWidth,gridHeight);
});

buttons[1].addEventListener('click',()=>{color='red'});
buttons[2].addEventListener('click',()=>{color='green'});
buttons[3].addEventListener('click',()=>{color='blue'});
buttons[4].addEventListener('click',()=>{color='black'});
buttons[5].addEventListener('click',()=>{color='white'});
buttons[6].addEventListener('click',()=> cleanScreen());

container.addEventListener('mousedown',()=> click=true);
container.addEventListener('mouseup',()=> click=false);


container.addEventListener('mouseover',(event)=>{
    if (event.target !== container &&  !Array.from(buttons).includes(event.target) && click){event.target.style.background= `${color}`;event.target.style.opacity= `${opacity}`;}
});






