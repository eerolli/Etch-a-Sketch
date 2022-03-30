//function to create a 16x16 grid
function createGrid(){
    let container = document.querySelector(".container");
    container.style.gridTemplateRows = "repeat(16, 1fr)";
    container.style.gridTemplateColumns = "repeat(16, 1fr)"
    
    for (let i = 0; i < 256; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        container.appendChild(square);
        //change background color of a square on hover
        square.addEventListener('mouseenter', e=>{
            square.style.backgroundColor = "beige";
        })
        
    }
}

createGrid();