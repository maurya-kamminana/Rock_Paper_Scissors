let humanScore = 0 , computerScore = 0;


function getComputerChoice(){
    const randomNumber = Math.floor((Math.random() * 100))%3;
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function doesHumanWin(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'draw';
    }
    if(
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'human';
    } else {
        return 'computer';
    }
}


function playRound(event){
    const humanChoice = event.target.textContent;
    const computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);
    const result = doesHumanWin(humanChoice, computerChoice);

    if (result === 'draw') {
        updateMessage("It's a draw!");
    } else if (result === 'human') {
        humanScore++;
        updateMessage("You won this round!");
    } else {
        computerScore++;
        updateMessage("Computer wins this round!");
    }
    updateScores();

    if (humanScore === 5 || computerScore === 5) {
        alert(humanScore === 5 ? "YOU WON THE GAME!!!" : "COMPUTER WON THE GAME!!!");
        humanScore = 0;
        computerScore = 0;
        updateScores();
        updateMessage("make your move");
        computerChoiceValue.innerText = "";
    }
}


function updateScores() {
    humanScoreElement.innerText = humanScore;
    computerScoreElement.innerText = computerScore;
}

function updateMessage(message) {
    messageElement.textContent = message;
}

function showComputerChoice(computerChoice){
    computerChoiceValue.textContent = computerChoice;
}

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");

// Create buttons
const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

// show computer choice 
const computerChoiceDiv = document.createElement("div");
const computerChoiceLabel = document.createElement("p");
computerChoiceLabel.textContent = "Computer chose: ";
const computerChoiceValue = document.createElement("span");
// computerChoiceValue.textContent = computerChoice;
computerChoiceDiv.appendChild(computerChoiceLabel);
computerChoiceDiv.appendChild(computerChoiceValue);
computerChoiceDiv.style.display = "flex";
computerChoiceDiv.style.alignItems = "center";
computerChoiceDiv.style.gap = "10px";

// Scoreboard container
const scoreboard = document.createElement("div");
scoreboard.classList.add("scoreboard");

// Human score section
const humanSection = document.createElement("div");
humanSection.classList.add("score-section");
const humanLabel = document.createElement("p");
humanLabel.textContent = "Human";
const humanScoreElement = document.createElement("span");
humanScoreElement.textContent = humanScore;
humanScoreElement.classList.add("score");
humanSection.appendChild(humanLabel);
humanSection.appendChild(humanScoreElement);
humanSection.style.display = "flex";
humanSection.style.alignItems = "center";
humanSection.style.gap = "10px";

// Computer score section
const computerSection = document.createElement("div");
computerSection.classList.add("score-section");
const computerLabel = document.createElement("p");
computerLabel.textContent = "Computer";
const computerScoreElement = document.createElement("span");
computerScoreElement.textContent = computerScore;
computerScoreElement.classList.add("score");
computerSection.appendChild(computerLabel);
computerSection.appendChild(computerScoreElement);
computerSection.style.display = "flex";
computerSection.style.alignItems = "center";
computerSection.style.gap = "10px";

// Append to scoreboard
scoreboard.appendChild(humanSection);
scoreboard.appendChild(computerSection);

// Message element for result display
const messageElement = document.createElement("div");
messageElement.classList.add("message");
messageElement.textContent = "Make your move!";

// Append elements to container
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(scoreboard);
container.appendChild(messageElement);
body.appendChild(container);
container.insertBefore(computerChoiceDiv, scoreboard);