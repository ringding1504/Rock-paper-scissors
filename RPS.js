
 // Random computer return
function computerPlay () {
    rpc = ["rock", "paper", "scissors"];
    let rpcRan = rpc[Math.floor(Math.random()*rpc.length)];
    return rpcRan;
  }

let playerScore = 0;
let computerScore = 0;
let result = document.querySelector(".display");
let scoreBoard = document.querySelector(".score");
scoreBoard.innerHTML = 0  + " : " + 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function(){
        let playerSelection = button.id;
        let computerSelection = computerPlay();
       

        if (playerSelection == "btn1" && computerSelection == "scissors" || 
           playerSelection == "btn2" && computerSelection == "rock" || 
           playerSelection == "btn3" && computerSelection == "paper") {
           playerScore ++;
           scoreBoard.innerHTML = playerScore + "\xa0:\xa0" + computerScore;
           result.innerHTML = "You win this round!";

           
           
             
           }
           else if (playerSelection == "btn1" && computerSelection == "paper" || 
                   playerSelection == "btn2" && computerSelection == "scissors" || 
                   playerSelection == "btn3" && computerSelection == "rock") {
                   computerScore ++;
                   scoreBoard.innerHTML = playerScore + "\xa0:\xa0" + computerScore;
                   result.innerHTML = "You lose this round!";
                 
                
                  
           }
           else {
                result.innerHTML = "Tie!";
                
                
           }

        if (playerScore == 5) {
            result.innerHTML = "Congratulations! You won the game!";
            playerScore = 0;
            computerScore = 0;
            } 
            else if ( computerScore == 5) {
                    result.innerHTML = "You lost! Better luck next time";
                    playerScore = 0;
                    computerScore = 0;
            }
    })
})