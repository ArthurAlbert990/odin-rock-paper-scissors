//[OK] usuário escolhe pedra papel ou tesoura
//[OK] computador escolhe pedra papel ou tesoura aleatoriamente
//[OK] comparar escolha do usuário e do computador
//[OK] exibe mensagem com o resultado


function getComputerChoice(){
    let options = ["Rock","Paper", "Scissors"]

    let computerChoice = Math.floor(Math.random() * (options.length));

    return options[computerChoice];
}

function getUserChoice(){
    return prompt("Rock, Paper or Scissors?");
}

function playRound(playerSelection = getUserChoice(), computerSelection = getComputerChoice()){
    console.log(playerSelection,computerSelection)
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection.toLowerCase();
    let roundChoices = [pS, cS];
    
    if(pS===cS){
        return ["TIE!", roundChoices];

    } else{
        switch(pS){
            case "rock":
                if (cS==="paper"){
                    return [`You LOOSE, ${cS} beats ${pS}!`,roundChoices];
                } else {
                    return [`You WIN, ${pS} beats ${cS}!`,roundChoices];
                }
            case "paper":
                if(cS==="scissors"){
                    return [`You LOOSE, ${cS} beats ${pS}!`,roundChoices];
                } else{
                    return [`You WIN, ${pS} beats ${cS}!`,roundChoices];
                }
            case "scissors":
                if(cS==="rock"){
                    return [`You LOOSE, ${cS} beats ${pS}!`,roundChoices];
                } else{
                    return [`You WIN, ${pS} beats ${cS}!`,roundChoices];
                }
            }
        }
    }

//refactored function on RPS-UI branch to follow round count:
// the user WINs the full game when he wins 5 rounds

function game(round){
    if(round[0].includes('WIN')){
        roundWinCount += 1;
        userScorePara.textContent = `${roundWinCount}`
        resultPara.style.color = "green"
    } 
    else if(round[0].includes('LOOSE')){
        machinePoints +=1;
        machineScorePara.textContent = `${machinePoints}`
        resultPara.style.color = "red";
    }

    if(roundWinCount>=5){
        roundWinCount = 0;
        machinePoints = 0;
        machineScorePara.textContent = `${machinePoints}`
        userScorePara.textContent = `${roundWinCount}`
        alert('Congratulations, you have WON 5 rounds against the machine ! ! !')
    }

    return ;
}


// RPS-UI BRANCH
//global var to store last result
let roundResult
//global var to store round points
let roundWinCount = 0;
let machinePoints = 0;

//Select buttons
const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

//select result text
const resultPara = document.querySelector(".result")

//select scoreboard texts
const userScorePara = document.querySelector(".user-points").firstElementChild;
const machineScorePara = document.querySelector(".machine-points").firstElementChild;

//add event listeners on button click
rockButton.addEventListener('click', function () {
    roundResult = playRound('rock',);
    resultPara.textContent = `${roundResult[0]}`;
    game(roundResult);

}); //playRound on callback instead of direct calling it
paperButton.addEventListener('click', function(){
    roundResult = playRound('paper',);
    resultPara.textContent=`${roundResult[0]}`;
    game(roundResult)
});
scissorsButton.addEventListener('click', function(){
    roundResult = playRound('scissors',);
    resultPara.textContent=`${roundResult[0]}`;
    game(roundResult);
});