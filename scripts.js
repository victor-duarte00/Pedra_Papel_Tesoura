const divStart = document.getElementById("start")
const divGame = document.getElementById("game")
const divResult = document.getElementById("result")

const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")

const textResult = document.getElementById("textResult")

start = () =>{
    divStart.style.display = "none"
    divGame.style.display = "flex"
}

checkResult = () =>{
    let text = ""
    const winPlayer1 = "O ganhador foi o Player1!"
    const winPlayer2 = "O ganhador foi o Player2!"
    const atie = "Empate"
    const result = player1.value + player2.value
    
    console.log(result)

    if(result === "stonescissors" || result === "paperstone" || result === "scissorspaper"){
        text = winPlayer1
    } else
    if(result === "scissorsstone" || result === "stonepaper" || result === "paperscissors"){
        text = winPlayer2
    }else
    if(result === "stonestone" || result === "paperpaper" || result === "scissorsscissors"){
        text = atie
    }

    divGame.style.display = "none"
    divResult.style.display = "flex"
    textResult.innerHTML = text
}

playAgain = () =>{
    divResult.style.display =  "none"
    divGame.style.display = "flex"
}