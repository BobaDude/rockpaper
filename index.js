let humanScore = 0;
let computerScore = 0;
// Rolls a random number between 0-2, and returns rock paper or scissors depending on the number rolled
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
// Makes a prompt in the webpage that asks the user what their chose is, and returbs it in lowercase
function getHumanChoice() {
	return prompt('Choose rock, paper, or scissors').toLowerCase();
}
// plays a game of rock paper scissors, by running the function play round five times
function playGame() {
    // play round plays a round of rock paper scissors, by comparing computer selection and human selection 
	function playRound(humanSelection, computerSelection) {


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
