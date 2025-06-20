let humanScore = 0;
let computerScore = 0;

let humanChoice = "";
let computerChoice = "";

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsContainer = document.getElementById('scorebox')

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

// plays a game of rock paper scissors, by running the function play round five times
// play round plays a round of rock paper scissors, by comparing computer selection and human selection 
	function playRound(humanSelection, computerSelection) {
		const human = humanChoice.toLowerCase();
		const computer = computerChoice.toLowerCase();
		let roundResult = '';

		if (human === computer) {
			roundEnd = "Tie";
		} else if (
			(human === 'rock' && computer === 'scissors') ||
			(human === 'scissors' && computer === 'paper') ||
			(human === 'paper' && computer === 'rock')
		) {
			humanScore++;
			roundEnd = 'You win!'  
		} else {
		 computerScore++;
		roundEnd ='You lose'};
	}
	resultsDiv.innerHTML = `<p>You chose: ${human.charAt(0).toUpperCase() + human.slice(1)}</p>
			<p>Computer chose: ${computer.charAt(0).toUpperCase() + computer.slice(1)}</p>
			<p>${roundResult}</p>`;

			rockButton.addEventListener('click', () => {
		if (!gameOver) {
			const computerChoice = getComputerChoice();
			playRound('rock', computerChoice);
		}
	});

	paperButton.addEventListener('click', () => {
		if (!gameOver) {
			const computerChoice = getComputerChoice();
			playRound('paper', computerChoice);
		}
	});

	scissorsButton.addEventListener('click', () => {
		if (!gameOver) {
			const computerChoice = getComputerChoice();
			playRound('scissors', computerChoice);
		}
	});
)