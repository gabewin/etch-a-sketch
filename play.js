let numSquares = 16;


function createGrid(numSquares){
    let width = 960/(Math.sqrt(numSquares));

    for (let i = numSquares; i>0; i--){
        console.log("in the for loop");
        const container = document.querySelector('#container');

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'blue';
        square.style.width = width + 'px';
        square.style.height = width + 'px';

        container.appendChild(square);
    }

}

createGrid(numSquares);