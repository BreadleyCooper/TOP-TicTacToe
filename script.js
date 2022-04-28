

const gameBoard = (() => {
    let won = false;
    let tie = true;
    // placeholder array for the gameBoard
    let gameBoardGrid = ["","","","","","","","",""]
    // cache the DOM elements needed and render
    let currentPlayer = "Player 1"
    let playerMarker = "X"
    let roundInfo = document.querySelector(".roundInfo");
    roundInfo.textContent = `${currentPlayer}, it's your turn. You are X`
    
    function toggleWinOverlay (){
        document.body.classList.toggle("activeForm")
    }
    let overlayResult = document.querySelector(".result")

    const _createGameBoard = () => {
            
        gameContainer = document.querySelector(".gameContainer");
        for (let i=0;i<gameBoardGrid.length;i++) {
        
//          create the game grid in the DOM
        
            let gridSquare = document.createElement('div');
            gridSquare.setAttribute("id",`${i}`)
            gridSquare.classList.add("gridSquare")
            gameContainer.appendChild(gridSquare)
            gridSquare.addEventListener("click",() => {
            
//          logic for inputting an X or O and splicing to the array    
            
            if (gridSquare.textContent == "") {    
                if (currentPlayer == "Player 1") {
                    gameBoardGrid.splice(i,1,"X")
                    gridSquare.textContent = playerMarker 
                    gridSquare.classList.toggle("X")
                    _checkWin(); 
                    currentPlayer = "Player 2";
                    playerMarker = "O"
                    roundInfo.textContent = `${currentPlayer}, it's your turn. You are ${playerMarker}`
                    

                }else  {currentPlayer = "Player 1";
                        gameBoardGrid.splice(i,1,"O")
                        gridSquare.textContent = playerMarker
                        gridSquare.classList.toggle("O")
                        _checkWin(); 
                        playerMarker = "X"
                        roundInfo.textContent = `${currentPlayer}, it's your turn. You are ${playerMarker}`;   
                        
                        
                        } 
            }}
            )}
            
        }
//      function to check if a winning condition is met. 
    const _checkWin = () => {

    const checkTie = () => {
    if (!gameBoardGrid.includes("") && (won == false)) {
        alert ("tie")
        tie = true;
        overlayResult.textContent = "It's a tie!"
        toggleWinOverlay();
        return
    }
    }
    

    const win1 = () => {
        let a = gameBoardGrid[0]
        let b = gameBoardGrid[1]
        let c = gameBoardGrid[2]
        let check1 = [];
        check1.push(a,b,c);
        check1 = check1.join(""); 
        
        if ((check1 === "XXX") || (check1 === "OOO")) {
            console.log("TrickyWIN1")
            _win();
            toggleWinOverlay()
            return
            }
        }
    

    const win2 = () => {
        let a = gameBoardGrid[3]
        let b = gameBoardGrid[4]
        let c = gameBoardGrid[5]
        let check2 = [];
        check2.push(a,b,c);
        check2 = check2.join(""); 
        
        if ((check2 === "XXX") || (check2 === "OOO")) {
            console.log("TrickyWIN2")
            _win()
            return
            }
        }
    

    const win3 = () => {
        let a = gameBoardGrid[6]
        let b = gameBoardGrid[7]
        let c = gameBoardGrid[8]
        let check3 = [];
        check3.push(a,b,c);
        check3 = check3.join(""); 
        
        if ((check3=== "XXX") || (check3 === "OOO")) {
            console.log("TrickyWIN3")
            _win()
            return
            }
        }
    
    
    const win4 = () => {
        let e = gameBoardGrid[0]
        let f = gameBoardGrid[3]
        let g = gameBoardGrid[6]
        let check4 = [];
        check4.push(e,f,g);
        check4 = check4.join(""); 
        
        if ((check4 === "XXX") || (check4 === "OOO")) {
            console.log("TrickyWIN4")
            _win()
            return
            }
        }
    
    const win5 = () => {
        let h = gameBoardGrid[1]
        let i = gameBoardGrid[4]
        let j = gameBoardGrid[7]
        let check5 = [];
        check5.push(h,i,j);
        check5 = check5.join(""); 
        
        if ((check5 === "XXX") || (check5 === "OOO")) {
            console.log("TrickyWIN5")
            _win()
            return
            }
        }
    
    const win6 = () => {
        let k = gameBoardGrid[2]
        let l = gameBoardGrid[5]
        let m = gameBoardGrid[8]
        let check6 = [];
        check6.push(k,l,m);
        check6 = check6.join(""); 
    
        if ((check6 === "XXX") || (check6 === "OOO")) {
            console.log("TrickyWIN6")
            _win()
            return
            }
        }
       
    const win7 = () => {
        let n = gameBoardGrid[6]
        let o = gameBoardGrid[4]
        let p = gameBoardGrid[2]
        let check7 = [];
        check7.push(n,o,p);
        check7 = check7.join(""); 
    
        if ((check7 === "XXX") || (check7 === "OOO")) {
            console.log("TrickyWIN7")
            _win()
            return
            }
        }
    
    
    
       const win8 = () => {
        let q = gameBoardGrid[0]
        let r = gameBoardGrid[4]
        let s = gameBoardGrid[8]
        let check8 = [];
        check8.push(q,r,s);
        check8 = check8.join(""); 
    
        if ((check8 === "XXX") || (check8 === "OOO")) {
            console.log("TrickyWIN8")
            _win()
            return
            }
        }
        
        checkTie()
        if (tie === false) {
        win1()
        win2()
        win3()
        win4()
        win5()
        win6()
        win7()
        win8()
        }
    }
    
        const _win = () => {
        won = true
        overlayResult.textContent = "The winner is `${currentPlayer}!`"
        toggleWinOverlay()
        alert(`${currentPlayer}, you win! `)
        }    
        _createGameBoard()
        _checkWin() 
    
        
})()

const playerCreator = (player, marker) => {
    // tie in player and marker selecter from use inputs when done
}

// Players factory function

// GamePlay Module to control the flow of the game

// https://www.svgrepo.com/svg/396235/cross-mark  ---  X SVG
// https://www.svgrepo.com/svg/396905/letter-o --- O SVG