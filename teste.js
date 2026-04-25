
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();

    // humanChoice = humanChoice.toLowerCase();
    let result = "";


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

function getHumanChoice() {

    let number =  Math.random();
    let choice = prompt("What do you choose?");

    choice = choice.toLowerCase();
    
    return choice;
}

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



// h = "scissors";
// // l = "rock";
// // l = "rock";
// // l = "scissors";

// // h = "paper";
// l = "rock";

// f = playRound(h,l)

// console.log(f)
// console.log(humanScore)

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let round = playRound(humanSelection, computerSelection)

console.log(computerSelection)
console.log(humanSelection)
console.log(round)
