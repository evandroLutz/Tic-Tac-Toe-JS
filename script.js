let turnPlayer = 0;

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
    if(!checkAlreadyFilled(square)){
        turnChar.classList.add('show');
        turnPlayer++;
    }    
}

function checkAlreadyFilled(square){
    return square.querySelector('.show');
}