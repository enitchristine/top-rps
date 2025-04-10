function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3)+1;

    switch (randNum){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    let choice=prompt("Enter rock, paper or scissors:");

    return choice;
}

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice===computerChoice){
        console.log("Draw! You both chose "+humanChoice+".");
        return;
    }else if(humanChoice==="paper"){ // player chooses paper
        if(computerChoice==="rock"){
            console.log("You win! Paper beats rock!");
        } else if (computerChoice==="scissors"){
            console.log("You lose :(. Scissors beat paper.")
        }
    }else if(humanChoice==="rock"){ // player chooses rock
        if(computerChoice==="scissors"){
            console.log("You win! Rock beats scissors!");
        } else if (computerChoice==="paper"){
            console.log("You lose :(. Paper beats rock.")
        }
    }else if(humanChoice==="scissors"){ // player chooses scissors
            if(computerChoice==="paper"){
                console.log("You win! Scissors beats paper!");
            } else if (computerChoice==="rock"){
                console.log("You lose :(. Rock beats scissors.")
            }
    }
}

//global variables
let humanScore=0;
let computerScore=0;

playRound(getHumanChoice(),getComputerChoice());