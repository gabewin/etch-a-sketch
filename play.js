let numSquaresPerSide = 4;


function createGrid(numSquaresPerSide){
    let width = 960/numSquaresPerSide;

    for (let i = numSquaresPerSide**2; i>0; i--){
        console.log("in the for loop");
        const container = document.querySelector('#container');

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.style.width = width + 'px';
        square.style.height = width + 'px';


        container.appendChild(square);
    }
}

    //add event listeners to all squares
function addEventListeners(){
    console.log("we're here in the function");
    const squares = container.getElementsByClassName('square');
    console.log(squares);
    for(let i = 0; i<squares.length; i++){
        console.log('and now we\'re in the for loop');
        // and for each one we add a 'click' listener
        squares[i].addEventListener('mouseover', () => {
            console.log('mouseover');
            squares[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
      };

    }

createGrid(numSquaresPerSide);
addEventListeners();