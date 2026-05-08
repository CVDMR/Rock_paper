
const humanBtn = document.getElementById("humanChoice");
const computerBtn = document.getElementById("computerChoice");
const play = document.getElementById("play");
let humanChoice = document.querySelector("input");
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const results = document.querySelector('div');
const entryHuman = document.createElement("p");
const entryComputer = document.createElement("p");


humanBtn.addEventListener("click", getHumanChoice);

computerBtn.addEventListener("click", getComputerChoice);

play.addEventListener("click", playRound);


function getComputerChoice() {

    let number =  Math.random();
    

    if (number < 0.3) {
        computerChoice = "paper";
    } else if (number >= 0.3 && number < 0.6) {
        computerChoice = "rock";
    } else {
        computerChoice = "scissors";
    }    

    entryComputer.textContent = `The computer choice was ${computerChoice}`;

    results.appendChild(entryComputer);
    
    // alert(`O computador escolheu ${computerChoice}.`);
    
   
  
}


function getHumanChoice() {

    const escolha = humanChoice.value.toLowerCase();
    humanChoice.value = "";

    entryHuman.textContent = `Your choice was ${escolha}`;

    results.appendChild(entryHuman);
   
    // alert(`Sua escolha foi ${escolha}.`);    
}



function playRound () {
    

    if (humanChoice.value === "paper") {
        if (computerChoice === "paper") {
           humanScore = humanScore;
           computerScore = computerScore;

        } else if (computerChoice === "rock") {
            humanScore++;
            computerScore--;
        } else {
            result = "You loose! Scissors beats paper.";
            humanScore--; 
            computerScore++;           
        } 
    }

   if (humanChoice.value === "rock") {
        if (computerChoice === "paper") {
            humanScore--;
            computerScore++;
        } else if (computerChoice === "rock") {
            humanScore = humanScore;
           computerScore = computerScore;                
        } else {
           humanScore++;
           computerScore--;
        } }

    if (humanChoice.value === "scissors") {
        if (computerChoice === "paper") {
        humanScore++;
        computerScore--;        
        } else if (computerChoice === "rock") {                              
            humanScore--; 
            computerScore++;           
        } else {
            humanScore = humanScore;
           computerScore = computerScore;                    
        } }
    
    

    roundCount++;
    alert(roundCount);

    

    if (roundCount == 3) {        
        alert(`The game is over!! Final score: Human ${humanScore} vs Computer ${computerScore}!!`)
        
        rounCount = 0;
        humanScore = 0;
        computerScore = 0;
    } else {
        alert(`You chose ${humanChoice.value}, the computer chose ${computerChoice}. Therefor you scored is ${humanScore} and the computer score is ${computerScore}.`);

    }
}


// function playGame() {
//     let result = 0;
//     for (i=1; i <=5; i++) {
//         result += playRound();
//     }
//     return result
// }

// humanChoice.focus()