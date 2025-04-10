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
            humanScore+=1;
        } else if (computerChoice==="scissors"){
            console.log("You lose :(. Scissors beat paper.")
            computerScore+=1;
        }
    }else if(humanChoice==="rock"){ // player chooses rock
        if(computerChoice==="scissors"){
            console.log("You win! Rock beats scissors!");
            humanScore+=1;
        } else if (computerChoice==="paper"){
            console.log("You lose :(. Paper beats rock.")
            computerScore+=1;
        }
    }else if(humanChoice==="scissors"){ // player chooses scissors
            if(computerChoice==="paper"){
                console.log("You win! Scissors beats paper!");
                humanScore+=1;
            } else if (computerChoice==="rock"){
                console.log("You lose :(. Rock beats scissors.")
                computerScore+=1;
            }
    }
}

function playGame(){

    function playRound(humanChoice,computerChoice){
        humanChoice=humanChoice.toLowerCase();
    
        if (humanChoice===computerChoice){
            console.log("Draw! You both chose "+humanChoice+".");
            return;
        }else if(humanChoice==="paper"){ // player chooses paper
            if(computerChoice==="rock"){
                console.log("You win! Paper beats rock!");
                humanScore+=1;
            } else if (computerChoice==="scissors"){
                console.log("You lose :(. Scissors beat paper.")
                computerScore+=1;
            }
        }else if(humanChoice==="rock"){ // player chooses rock
            if(computerChoice==="scissors"){
                console.log("You win! Rock beats scissors!");
                humanScore+=1;
            } else if (computerChoice==="paper"){
                console.log("You lose :(. Paper beats rock.")
                computerScore+=1;
            }
        }else if(humanChoice==="scissors"){ // player chooses scissors
                if(computerChoice==="paper"){
                    console.log("You win! Scissors beats paper!");
                    humanScore+=1;
                } else if
                (computerChoice==="rock"){
                    console.log("You lose :(. Rock beats scissors.")
                    computerScore+=1;
                }
        }
    }

    let humanScore=0;
    let computerScore=0;

    for (let i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore===computerScore){
        console.log("Draw! Nobody wins :/");
    }
    else if (humanScore>computerScore){
        console.log("You win! You beat the computer!");
    }else{
        console.log("You lose... to a computer?!")
    }
    
}

playGame();
