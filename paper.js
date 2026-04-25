


function getComputerChoice() {

    let number =  Math.random();
    let choice;

    if (number < 0.3) {
        choice = "paper";
    } else if (number >= 0.3 && number < 0.6) {
        choice = "rock";
    } else {
        choice = "scissors";
    }    
    return choice
}


function getHumanChoice() {

    let number =  Math.random();
    let choice = prompt("What do you choose?");

    choice = choice.toLowerCase();
    
    return choice;
}

// console.log(getComputerChoice())

// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();

    // humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            result = "Tied!!!";
        } else if (computerChoice === "rock") {
            result = "You win! Paper beats rock.";
            humanScore++;
            computerScore--;
        } else {
            result = "You loose! Scissors beats paper.";
            humanScore--;
            computerScore++;
        } 
    }

   if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result =    "You loose! Paper beats rock.";
            humanScore--;
            computerScore++;
        } else if (computerChoice === "rock") {
            result = "Tied!!!";                
        } else {
            result = "You win! Rock beats scissors.";
            humanScore++;
            computerScore--;
        } }


    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
        result = "You win! Scissors beats paper.";
        humanScore++;
        computerScore--;        
        } else if (computerChoice === "rock") {
            result = "You loose! Rock beats scissors.";                    
            humanScore--;
            computerScore++;            
        } else {
            result = "You tied!";                    
        } }

         return result
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let round = playRound(humanSelection, computerSelection)

console.log(computerSelection)
console.log(humanSelection)
console.log(round)

console.log(humanScore)