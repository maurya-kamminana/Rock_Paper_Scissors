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

function getHumanChoice(){
    let choice = prompt('enter your choice : 1 for rock , 2 for paper , 3 for scissors');
    let numberInput = Number(choice);
    if(isNaN(numberInput)){
        choice = choice.toLowerCase();
        choice = choice.trim();
        while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
            choice = prompt('invalid choice , enter your choice : rock , paper , scissors');
            choice = choice.toLowerCase();
            choice = choice.trim();
        }
    }
    else{
        choice = Number(choice);
        while(choice !== 1 && choice !== 2 && choice !== 3){
            choice = prompt('invalid choice , enter your choice : 1 for rock , 2 for paper , 3 for scissors');
            choice = Number(choice);
        }
        switch(choice){
            case 1:
                return 'rock';
            case 2:
                return 'paper';
            case 3:
                return 'scissors';
        }
    }
    return choice;
}

function doesHumanWin(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'draw';
    }
    if(humanChoice === 'rock'){
        return computerChoice === 'scissors';
    }
    if(humanChoice === 'paper'){
        return computerChoice === 'rock';
    }
    if(humanChoice === 'scissors'){
        return computerChoice === 'paper';
    }
}

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = doesHumanWin(humanChoice, computerChoice);
    if(result === 'draw'){
        console.log('draw');
    }
    else if(result){
        console.log('you won');
        humanScore++;
    }
    else{
        console.log('computer wins');
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(`round ${i+1} : `)
        playRound();
    }
    if(humanScore > computerScore){
        alert('YOU WON!!!!!');
        console.log('Hooray!! you won.');
        console.log(`your score : ${humanScore}`);
        console.log(`computer score : ${computerScore}`);
    }
    else if(humanScore < computerScore){
        alert('COMPUTER WON!!!!!');
        console.log('computer wins the game');
    }
    else{
        console.log('draw');
    }
}

playGame();