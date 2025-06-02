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
console.log(getHumanChoice);
console.log(getComputerChoice);

function playRound (humanSelection, computerSelection){
    //  if((humanSelection == "rock" && computerSelection =="paper")){ 
    //     return "You lose! The computer chose Paper and you chose Rock." 
    // } 
    // else if ((humanSelection ==))

    if (computerSelection  == "rock") {
        if (humanSelection == "rock") {
            return "You both chose Rock. It's a tie!"
        }
        else if (humanSelection == "paper") {
            return "You chose Paper and the Computer chose Rock. You Win!"
        }
        else {
            return "You chose Scissors and the Computer chose Rock. You Lose!."
        }
    }
    else if (computerSelection == "paper") {
        if (humanSelection == "rock") {
            return "You chose Rock and the Computer chose Paper. You Lose!"
        }
        else if (humanSelection == "paper") {
            return "You both chose Paper. It's a tie!"
        }
        else {
            return "You chose Scissors and the Computer chose Paper. You Win!"
        }
    }
    else if (computerSelection == "scissors"){
        if (humanSelection == "rock") {
            return "You chose Rock and the Computer chose Scissors. You Win!"
    }
        else if (humanSelection == "paper") {
            return "You chose Paper and the Computer chose Scissors. You Lose!"
    }
        else {
            return "You both chose Scissors. It's a tie!"
    }
}
}

function playGame() {
    
}
