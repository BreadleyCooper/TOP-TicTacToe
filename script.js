

const gameBoard = (() => {
    // placeholder array for the gameBoard
    let gameBoardGrid = ["","","","","","","","",""]
    // cache the DOM elements needed and render
    let currentPlayer = "Player 1"
    let roundInfo = document.querySelector(".roundInfo");
    roundInfo.textContent = `${currentPlayer}, it's your turn. You are CURRENTMARKER`


    const _createGameBoard = () => {
        gameContainer = document.querySelector(".gameContainer");
        for (let i=0;i<gameBoardGrid.length;i++) {
            let gridSquare = document.createElement('div');
            gridSquare.setAttribute("id",`${i}`)
            gridSquare.classList.add("gridSquare")
            gameContainer.appendChild(gridSquare)
            gridSquare.addEventListener("click", () => {
                gridSquare.textContent = "X"//current player marker
                if (currentPlayer == "Player 1") {
                    currentPlayer = "Player 2";
                    roundInfo.textContent = `${currentPlayer}, it's your turn. You are CURRENTMARKER`
                }else {currentPlayer = "Player 1";
                    roundInfo.textContent = `${currentPlayer}, it's your turn. You are CURRENTMARKER`;
                    console.log(currentPlayer) 
            }
            })
        }
    }   

    _createGameBoard()
})()

const playerCreator = (player, marker) => {
    // tie in player and marker selecter from use inputs when done
}

// Players factory function

// GamePlay Module to control the flow of the game