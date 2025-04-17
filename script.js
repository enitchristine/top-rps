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


function playGame(){

    function playRound(humanChoice,computerChoice){

        if (humanScore==5 || computerScore==5 ){
            const gameOver=document.createElement("p");
            display.appendChild(gameOver);
            gameOver.textContent="Game over. Reload page to play again.";
            return;
        }

        humanChoice=humanChoice.toLowerCase();
        choiceP.textContent="Your choice: "+humanChoice+". Computer choice: "+computerChoice+".";

        let text;

        if (humanChoice===computerChoice){
            text="Draw! You both chose "+humanChoice+".";
        
        }else if(humanChoice==="paper"){ // player chooses paper
            if(computerChoice==="rock"){
                text="You win! Paper beats rock!";
                humanScore+=1;
            } else if (computerChoice==="scissors"){
                text="You lose :(. Scissors beat paper.";
                computerScore+=1;
            }
        }else if(humanChoice==="rock"){ // player chooses rock
            if(computerChoice==="scissors"){
                text="You win! Rock beats scissors!";
                humanScore+=1;
            } else if (computerChoice==="paper"){
                text="You lose :(. Paper beats rock.";
                computerScore+=1;
            }
        }else if(humanChoice==="scissors"){ // player chooses scissors
                if(computerChoice==="paper"){
                    text="You win! Scissors beats paper!";
                    humanScore+=1;
                } else if (computerChoice==="rock"){
                    text="You lose :(. Rock beats scissors.";
                    computerScore+=1;
                }
        }

        resultP.textContent=text;

        scoreP.textContent="Human: "+humanScore+". Computer: "+computerScore+".";

        if (humanScore==5){
            finalP.textContent="You win! You beat the computer!";
        }else if (computerScore==5){
            finalP.textContent="You lost... to a computer?!";
        }

        
        
    }

    let humanScore=0;
    let computerScore=0;

    const rockButton=document.getElementById("rock");
    const paperButton=document.getElementById("paper");
    const scissorsButton=document.getElementById("scissors");

    const display = document.querySelector("div");

    const choiceP=document.createElement("p");
    display.appendChild(choiceP);

    const resultP=document.createElement("p");
    display.appendChild(resultP);

    const scoreP=document.createElement("p");
    display.appendChild(scoreP);

    const finalP=document.createElement("p");
    display.appendChild(finalP);

    rockButton.addEventListener("click",()=>{
        playRound("rock",getComputerChoice())
    });
    paperButton.addEventListener("click",()=>{playRound("paper",getComputerChoice())});
    scissorsButton.addEventListener("click",()=>{playRound("scissors",getComputerChoice())});

    if (humanScore==5){
        console.log("You win! You beat the computer!");
    }else if (computerScore==5){
        console.log("You lost... to a computer?!")
    }

    
}

playGame();
