function playGame() {
    const userChoice = document.getElementById("user").value.toLowerCase();
   //The computer choice//
    const computerChoice = computerSelection();
    const resultDisplay = document.getElementById("result");
//Form validation//
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
resultDisplay.textContent = "Please enter rock, paper, or scissors.";
return;
}

resultDisplay.textContent = "Computer chose " + computerChoice + ". "
if (userChoice === computerChoice) {
    resultDisplay.textContent += "Its a draw!";
} else if 
((userChoice === 'rock' &&
computerChoice === 'scissors') ||
(userChoice === 'paper' && 
computerChoice === 'rock') ||
(userChoice === 'scissors' &&
computerChoice === 'paper'))
{resultDisplay.textContent += 'You won!';
} else {
    resultDisplay.textContent += 'Computer won womp womp';}
}

function computerSelection() {
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
