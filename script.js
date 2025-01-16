document.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById('grid-container');
    const gridbtn = document.getElementById('change-grid');

    let gridSize = 16;

    function createGrid(size){
        container.innerHTML = '';

        const squareSize = 640/size;

        for(let i=0; i<size*size; i++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);

            square.addEventListener('mouseenter', function(){
                this.style.backgroundColor = 'black';
            });
        }
    }

    createGrid(gridSize);

    gridbtn.addEventListener('click', function(){
        let newSize = prompt("Enter the number of square per side (1-100):")

        newSize = parseInt(newSize);

        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
        }else{
            gridSize = newSize;  
            createGrid(gridSize); 
        }
    });
});



