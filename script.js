let turnPlayer = 0;

let winner = false;

const winGrade = [
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
    winGrade.forEach((possibility)=>{
        if(JSON.stringify(charSquares)==JSON.stringify(possibility)){
            console.log(`${char} winner`);
            winner = true;
        }
    })
}