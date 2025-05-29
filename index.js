let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return "rock"
    }
    else if(randomNumber === 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}
function getHumanChoice (){
    getHumanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
}
getHumanChoice();

function playRound (humanScore, computerScore){
    
    
    
}
