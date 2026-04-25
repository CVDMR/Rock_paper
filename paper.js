

// console.log("asf")
// alert("jal")

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
    
    return choice;
}

// console.log(getComputerChoice())

console.log(getHumanChoice())