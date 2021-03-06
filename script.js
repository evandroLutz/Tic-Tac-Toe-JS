let turnPlayer = 0;
let winner = false;
let freeSquares = 9;

const winGrades = [
   ['0', '1', '2'],
   ['3', '4', '5'],
   ['6','7','8'],
   ['2', '4', '6'],
   ['0','4','8'],
   ['0','3','6'],
   ['1','4','7'],
   ['2','5','8']   
]

function listenerToggleOnSquares(){
    const squares = document.querySelectorAll('.container .square');
    squares.forEach((square)=>{
        square.addEventListener('click',()=>{
            const char = controlPlayerTurn(turnPlayer);
            togglePlayerChar(char,square);
        });
    })
}


function controlPlayerTurn(turnActual){
    const turnResult = turnActual % 2 === 0 ? 'x' : 'o';
    return turnResult;
}

function togglePlayerChar(char,square){
    const turnChar = char === 'x'? square.querySelector('.x') : square.querySelector('.o');
    if(!checkAlreadyFilled(square) && !winner){
        turnChar.classList.add('show');
        turnPlayer++;
        checkWin(char);
        freeSquares--;
        if(freeSquares === 0 && !winner){
            document.querySelector('button').classList.add('show');
            const result = document.querySelector('.result');
            result.classList.add('show');
            result.textContent = `ninguém venceu!!! :/`;
        }
    }
}

function checkAlreadyFilled(square){
    return square.querySelector('.show');
}


function checkWin(char){
    const charSquares = [];
    const charShoweds = document.querySelectorAll(`.${char}.show`);
    charShoweds.forEach((charShowed)=>{
       charSquares.push(charShowed.parentNode.id);
    });
    winGrades.forEach((winGrade)=>{
            if(charSquares.includes(winGrade[0]) 
                 && charSquares.includes(winGrade[1]) 
                 && charSquares.includes(winGrade[2])){
                winner = true;
                const button = document.querySelector('button');
                button.classList.add('show');
                const result = document.querySelector('.result');
                result.classList.add('show');
                result.textContent = `${char} é o vencedor!!!`;
                colorizeCharsWin(winGrade);  
            }        
    })
}

function colorizeCharsWin(ids){
    ids.forEach((id)=>{
        const squareWinner = document.getElementById(`${id}`);
        squareWinner.classList.add('winner');
    })
}

function newGame(){
   const squaresToClean =  document.querySelectorAll('.show');
   squaresToClean.forEach((square)=>{
       square.classList.remove('show');
   })
   const squaresWinnerToClean =  document.querySelectorAll('.winner');
   squaresWinnerToClean.forEach((square)=>{
       square.classList.remove('winner');
   })

  turnPlayer = 0;
  winner = false;
  freeSquares = 9;
}

function newGameOnButton(){
    document.querySelector('button').addEventListener('click',()=>{
        newGame();
    });
}

listenerToggleOnSquares();
newGameOnButton();

