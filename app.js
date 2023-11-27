


const playBtn = document.querySelector(".playBtn");
const playerBox = document.getElementById("playerBox");
const computerBox = document.getElementById("computerBox");
const playerIcon = document.querySelector("[data-playerChoice]");
const computerIcon = document.querySelector("[data-computerChoice]");
const counterP_p = document.querySelector(".counterP");
const counterC_p = document.querySelector(".counterC");
const outcome = document.querySelector(".outcome");
const resetScoreBtn = document.getElementById("resetScore");
let playerCounter = 0;
let computerCounter = 0;
const list = ["rock", "paper","scissors"];

playBtn.addEventListener("click", ()=>{
    clearClasses();
    startGame();
})

resetScoreBtn.addEventListener("click", ()=>{
    counterP_p.innerHTML = 0;
    counterC_p.innerHTML = 0;
    counterP_p.classList.add("rotate");
    counterC_p.classList.add("rotate");
})

function clearClasses(){
    playerIcon.className = "";
    computerIcon.className = "";
    counterP_p.className = "";
    counterC_p.className = "";
}

function getPlayerChoice(){
    let playerChoice = Math.floor(Math.random()*3);
    return playerChoice;
}
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
}

function addIcons(playerChoice,computerChoice){
    if(playerChoice === "rock"){
        playerIcon.classList.add("fa-regular","fa-hand-back-fist");
    }else if(playerChoice === "paper"){
        playerIcon.classList.add("fa-regular","fa-hand");
    }else if(playerChoice === "scissors"){
        playerIcon.classList.add("fa-regular","fa-hand-scissors");
    };
    if(computerChoice === "rock"){
        computerIcon.classList.add("fa-regular","fa-hand-back-fist");
    }else if(computerChoice === "paper"){
        computerIcon.classList.add("fa-regular","fa-hand");
    }else if(computerChoice === "scissors"){
        computerIcon.classList.add("fa-regular","fa-hand-scissors");
    }
}

function userWon(){
    playerBox.classList.add("winnerPlayer");
    setTimeout(()=>{
        playerBox.classList.remove("winnerPlayer")
    },600);
    counterP_p.innerHTML ++;
    counterP_p.classList.add("animated");
    outcome.innerHTML = "YOU WON!";
}
function userLost(){
    computerBox.classList.add("winnerBot");
    setTimeout(()=>{
        computerBox.classList.remove("winnerBot")
    },600);
    counterC_p.innerHTML ++;
    counterC_p.classList.add("animated");
    outcome.innerHTML = "YOU LOST..";
}
function itsDraw(){
    outcome.innerHTML = "DRAW!";
}

function checkWinner(){
    let playerChoice = list[getPlayerChoice()];
    let computerChoice = list[getComputerChoice()];
    if(playerChoice === "rock" && computerChoice === "scissors"){
        addIcons(playerChoice,computerChoice);
        userWon();
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        addIcons(playerChoice,computerChoice);
        userWon();
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        addIcons(playerChoice,computerChoice);
        userWon();
    }else if(playerChoice === "rock" && computerChoice === "paper"){
        addIcons(playerChoice,computerChoice);
        userLost()
    }else if(playerChoice === "scissors" && computerChoice === "rock"){
        addIcons(playerChoice,computerChoice);
        userLost()
    }else if(playerChoice === "paper" && computerChoice === "scissors"){
        addIcons(playerChoice,computerChoice);
        userLost()
    }else{
        addIcons(playerChoice,computerChoice);
        itsDraw();
    }
}

function startGame(){
    checkWinner();
}