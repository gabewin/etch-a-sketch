let numSquaresPerSide = 4;
const container = document.querySelector('#container');

function createGrid(numSquaresPerSide){
    let width = 960/numSquaresPerSide;
    container.replaceChildren();

    for (let i = numSquaresPerSide**2; i>0; i--){
        console.log("in the for loop");
        

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.style.width = width + 'px';
        square.style.height = width + 'px';


        container.appendChild(square);
    }
}

    //add event listeners to all squares
function addSquareEventListeners(){
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

function userPrompt(){
    let numSquares = prompt('How many squares per side? (Limit 100)', '4');

    //error handling if not a number
    if (isNaN(numSquares)) {
        numSquares = 4;
    }
    else if (numSquares > 100){
        console.log('too big...making this 100');
        numSquares = 100;
    }
    createGrid(numSquares);
    addSquareEventListeners();

}
createGrid(numSquaresPerSide);
addSquareEventListeners();

let button = document.getElementById('custom');
button.addEventListener('click', userPrompt);
