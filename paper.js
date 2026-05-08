
const humanBtn = document.getElementById("humanChoice");
const computerBtn = document.getElementById("computerChoice");
const play = document.getElementById("play");
 const choice = document.querySelector("input");

humanBtn.addEventListener("click", getHumanChoice);

computerBtn.addEventListener("click", getComputerChoice);


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
    alert(`O computador escolheu ${choice}.`);
}


function getHumanChoice() {

    const escolha = choice.value.toLowerCase();
    choice.value = "";

  

    alert(`Sua escolha foi ${escolha}.`);

    
    // return choice;
}



function playRound () {
    let humanScore = 0;    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === "paper") {
        if (computerChoice === "paper") {
           humanScore = 0;
        } else if (computerChoice === "rock") {
            humanScore++;
        } else {
            result = "You loose! Scissors beats paper.";
            humanScore--;            
        } 
    }

   if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            humanScore--;
        } else if (computerChoice === "rock") {
            humanScore = 0;                
        } else {
           humanScore++;
        } }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
        humanScore++;        
        } else if (computerChoice === "rock") {                              
            humanScore--;            
        } else {
            humanScore = 0;                    
        } }
    
    return humanScore
}


function playGame() {
    let result = 0;
    for (i=1; i <=5; i++) {
        result += playRound();
    }
    return result
}

// console.log(playGame())