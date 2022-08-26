//[OK] usuário escolhe pedra papel ou tesoura
//[OK] computador escolhe pedra papel ou tesoura aleatoriamente
//[EM ANDAMENTO] comparar escolha do usuario e do computador
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

    if(pS===cS){
        return "TIE!"
    }else{
        switch(pS){
            case "rock":
                if (cS==="paper"){
                    return "You LOOSE!"
                } else {
                    return  "You WIN!"
                }
            case "paper":
                if(cS==="rock"){
                    return "You LOOSE!"
                } 
                else{
                    return "You WIN!"
                }
        }
    }
}



