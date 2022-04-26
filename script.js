

const gameBoard = (() => {
    // placeholder array for the gameBoard
    let gameBoardGrid = ["","","","","","","","",""]
    // cache the DOM elements needed and render
    let currentPlayer = "Player 1"
    let playerMarker = "X"
    let roundInfo = document.querySelector(".roundInfo");
    roundInfo.textContent = `${currentPlayer}, it's your turn. You are X`
    
    const _createGameBoard = () => {
            
        gameContainer = document.querySelector(".gameContainer");
        for (let i=0;i<gameBoardGrid.length;i++) {
            let gridSquare = document.createElement('div');
            gridSquare.setAttribute("id",`${i}`)
            gridSquare.classList.add("gridSquare")
            gameContainer.appendChild(gridSquare)
            gridSquare.addEventListener("click",() => {
            if (gridSquare.textContent == "") {    
                if (currentPlayer == "Player 1") {
                    currentPlayer = "Player 2";
                    gridSquare.textContent = playerMarker
                    playerMarker = "O"
                    roundInfo.textContent = `${currentPlayer}, it's your turn. You are ${playerMarker}`
                }else  {currentPlayer = "Player 1";
                        gridSquare.textContent = playerMarker   
                        playerMarker = "X"
                        roundInfo.textContent = `${currentPlayer}, it's your turn. You are ${playerMarker}`;   
                        } 
            }}
            )}
            
        }
        _createGameBoard()
})()

const playerCreator = (player, marker) => {
    // tie in player and marker selecter from use inputs when done
}

// Players factory function

// GamePlay Module to control the flow of the game