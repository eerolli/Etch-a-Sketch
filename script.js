let clear = document.querySelector("#clear");
let container = document.querySelector(".container");
let resize = document.querySelector("#resize");
let colorPicker = document.querySelector("#colorpicker");
let color = "#ffffff"

//function to set a new size for the grid
function resetSize(){
    let number = prompt("What size would you like the grid to be? (1-100)");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number);
}

//run resetSize() on click of button
resize.addEventListener('click', ()=>{
    resetSize()
});


//function to change color of drawing line
function changeColor(newColor){
    color = newColor;
}

//change the color of the line when the color picker is used
colorPicker.onchange = (e) => changeColor(e.target.value)


//function to create a 16x16 grid
function createGrid(size){


    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "black";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = color;
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "black"
           })
           resize.addEventListener('click', ()=>{
                square.style.backgroundColor = "black"
           })
        }
        

        clearGrid();    
    }
}

createGrid(16);