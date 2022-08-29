//[OK] usuário escolhe pedra papel ou tesoura
//[OK] computador escolhe pedra papel ou tesoura aleatoriamente
//[EM ANDAMENTO] comparar escolha do usuário e do computador
//exibe mensagem com o resultado


function getComputerChoice(){
    let options = ["Rock","Paper", "Scissors"]

    let computerChoice = Math.floor(Math.random() * (options.length))

    return options[computerChoice];
}

function getUserChoice(){
    return userChoice = prompt("Rock, Paper or Scissors?");
}

function playRound(playerSelection = getUserChoice(), computerSelection = getComputerChoice()){
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


function game(rounds){
    let fullGameResult = []

    for (let x =1; x<=rounds; x++){
        let roundResult = playRound()
        fullGameResult.push(roundResult[1]);
        window.alert(roundResult[0]);
    }

    return fullGameResult;
}
