let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		return 'rock';
	} else if (randomNumber === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}
function getHumanChoice() {
	return prompt('Choose rock, paper, or scissors').toLowerCase();
}

function playGame() {
	function playRound(humanSelection, computerSelection) {
		//  if((humanSelection == "rock" && computerSelection =="paper")){
		//     console.log( "You lose! The computer chose Paper and you chose Rock."
		// }
		// else if ((humanSelection ==))

		if (computerSelection == 'rock') {
			if (humanSelection == 'rock') {
				console.log("You both chose Rock. It's a tie!");
			} else if (humanSelection == 'paper') {
				console.log(
					'You chose Paper and the Computer chose Rock. You Win!'
				);
			} else {
				console.log(
					'You chose Scissors and the Computer chose Rock. You Lose!.'
				);
			}
		} else if (computerSelection == 'paper') {
			if (humanSelection == 'rock') {
				console.log(
					'You chose Rock and the Computer chose Paper. You Lose!'
				);
			} else if (humanSelection == 'paper') {
				console.log("You both chose Paper. It's a tie!");
			} else {
				console.log(
					'You chose Scissors and the Computer chose Paper. You Win!'
				);
			}
		} else if (computerSelection == 'scissors') {
			if (humanSelection == 'rock') {
				console.log(
					'You chose Rock and the Computer chose Scissors. You Win!'
				);
			} else if (humanSelection == 'paper') {
				console.log(
					'You chose Paper and the Computer chose Scissors. You Lose!'
				);
			} else {
				console.log("You both chose Scissors. It's a tie!");
			}
		}
	}

	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
	playRound(getHumanChoice(), getComputerChoice());
}

console.log(playGame());
