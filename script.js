let clear = document.querySelector("#clear");
let container = document.querySelector(".container");
let resize = document.querySelector("#resize");
let colorPicker = document.querySelector("#colorpicker");
let color = "#ffffff";
let padColor = "#000000"
let reset = document.querySelector("#reset");
let eraser = document.querySelector("#eraser");

//function to set a new size for the grid
function changeSize(){
    let number = prompt("What size would you like the grid to be? (1-100)");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number);
}

//run resetSize() on click of button
resize.addEventListener('click', ()=>{
    changeSize()
});

//resets the sketchpad back to default settings
reset.addEventListener('click', ()=>{
    location.reload();
})


//function to change color of drawing line
function changeColor(newColor){
    color = newColor;
}

//eraser mode
function erase(){
    color = padColor;
}

//change the color of the line when the color picker is used
colorPicker.onchange = (e) => changeColor(e.target.value)


//function to create a 16x16 grid
function createGrid(size){


    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = padColor;
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = color;
        })

        //eraser mode after pressing eraser button
        eraser.addEventListener('click', ()=>{
            erase();
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = padColor
           })
           resize.addEventListener('click', ()=>{
                square.style.backgroundColor = padColor
           })
        }
        

        clearGrid();    
    }
}

createGrid(16);