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
    const result = player1.value + player2.value
    
    console.log(result)

    if(result === "stonescissors"){
        text = "O ganhador foi o Player1!"
    } else
    if(result === "paperstone"){
        text = "O ganhador foi o Player1!"
    }else
    if(result === "scissorspaper"){
        text = "O ganhador foi o Player1!"
    }else
    if(result === "scissorsstone"){
        text = "O ganhador foi o Player2!"
    }else
    if(result === "stonepaper"){
        text = "O ganhador foi o Player2!"
    }else
    if(result === "paperscissors"){
        text = "O ganhador foi o Player2!"
    }else
    if(result === "stonestone"){
        text = "Empate!"
    }else
    if(result === "paperpaper"){
        text = "Empate!"
    }else
    if(result === "scissorsscissors"){
        text = "Empate!"
    }

    divGame.style.display = "none"
    divResult.style.display = "flex"
    textResult.innerHTML = text
}

playAgain = () =>{
    divResult.style.display =  "none"
    divGame.style.display = "flex"
}