const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartButton = document.getElementById('restartButton');
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = O_TEXT;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if(index < 3){
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3 === 0){
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index % 3 === 2){
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if(index > 5){
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
};

const boxClicked = (e) => {
    const id = e.target.id;
    
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`;
            return;
        }
        currentPlayer  = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}

const playerHasWon = () => {
    //console.log(spaces);
    if(currentPlayer === spaces[0] && currentPlayer === spaces[1] && currentPlayer === spaces[2]){
        console.log(`${currentPlayer} Win on top`);
        return true;
    }
    if(currentPlayer === spaces[0] && currentPlayer === spaces[3] && currentPlayer === spaces[6]){
        console.log(`${currentPlayer} Win on left`);
        return true;
    }
    if(currentPlayer === spaces[2] && currentPlayer === spaces[5] && currentPlayer === spaces[8]){
        console.log(`${currentPlayer} Win on right`);
        return true;
    }
    if(currentPlayer === spaces[3] && currentPlayer === spaces[4] && currentPlayer === spaces[5]){
        console.log(`${currentPlayer} Win on middle`);
        return true;
    }
    if(currentPlayer === spaces[6] && currentPlayer === spaces[7] && currentPlayer === spaces[8]){
        console.log(`${currentPlayer} Win on bottom`);
        return true;
    }
    if((currentPlayer === spaces[0] && currentPlayer === spaces[4] && currentPlayer === spaces[8]) || (currentPlayer === spaces[2] && currentPlayer === spaces[4] && currentPlayer === spaces[6])){
        console.log(`${currentPlayer} Win on diagnal`);
        return true;
    }
}

restartButton.addEventListener('click', () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    })

    boxes.forEach((box, index) => {
        box.innerText = '';
    })
    playText.innerText = 'Play';
    currentPlayer = O_TEXT;
});


drawBoard();