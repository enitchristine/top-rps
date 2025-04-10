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

console.log(getHumanChoice());

// for (let i=0;i<3;i++){
//     console.log(getComputerChoice());   
// }