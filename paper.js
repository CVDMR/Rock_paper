
const humanBtn = document.getElementById("humanChoice");
const computerBtn = document.getElementById("computerChoice");
const play = document.getElementById("play");
let humanChoice = document.querySelector("input");
let computerChoice = "";

humanBtn.addEventListener("click", getHumanChoice);

computerBtn.addEventListener("click", getComputerChoice);

play.addEventListener("click", playRound);


function getComputerChoice() {

    let number =  Math.random();
    // let choice;

    if (number < 0.3) {
        computerChoice = "paper";
    } else if (number >= 0.3 && number < 0.6) {
        computerChoice = "rock";
    } else {
        computerChoice = "scissors";
    }    
    alert(`O computador escolheu ${computerChoice}.`);
}


function getHumanChoice() {

    const escolha =humanChoice.value.toLowerCase();
    // humanChoice.value = "";

  

    alert(`Sua escolha foi ${escolha}.`);

    
    // return choice;
}



function playRound () {
    let humanScore = 0;    
    // const humanChoice = getHumanChoice();
    // const computerChoice = getComputerChoice();

    if (humanChoice.value === "paper") {
        if (computerChoice === "paper") {
           humanScore = 0;
        } else if (computerChoice === "rock") {
            humanScore++;
        } else {
            result = "You loose! Scissors beats paper.";
            humanScore--;            
        } 
    }

   if (humanChoice.value === "rock") {
        if (computerChoice === "paper") {
            humanScore--;
        } else if (computerChoice === "rock") {
            humanScore = 0;                
        } else {
           humanScore++;
        } }

    if (humanChoice.value === "scissors") {
        if (computerChoice === "paper") {
        humanScore++;        
        } else if (computerChoice === "rock") {                              
            humanScore--;            
        } else {
            humanScore = 0;                    
        } }
    
    alert(`Your chose ${humanChoice.value}, the computer chose ${computerChoice} and you scored ${humanScore}.`);
}


function playGame() {
    let result = 0;
    for (i=1; i <=5; i++) {
        result += playRound();
    }
    return result
}

// console.log(playGame())