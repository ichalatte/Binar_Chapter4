// Player Variables
let playerRock = document.getElementById("rockplayer");
let playerPaper = document.getElementById("paperplayer");
let playerScissors = document.getElementById("scissorplayer");
let playerFinal = "";
let p;


// CPU Variables
let cpuRock = document.getElementById("rockcom");
let cpuPaper = document.getElementById("papercom");
let cpuScissors = document.getElementById("scissorcom");
let cpuFinal = "";
let c;

// Result
let results = document.getElementById("result");

// Reset
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", function(){
  reset()
});


// Get Player Choice On Click
function selectPlayer(p) {
  if (p === 0) {
    playerFinal = "Rock";
    rockplayer.style.backgroundColor = "#C4C4C4";
    rockplayer.style.padding = "10px";
    rockplayer.style.borderRadius = "10px";
  }
  if (p === 1) {
    playerFinal = "Paper";
    paperplayer.style.backgroundColor = "#C4C4C4";
    paperplayer.style.padding = "10px";
    paperplayer.style.borderRadius = "10px";
  }
  if (p === 2) {
    playerFinal = "Scissors";
    scissorplayer.style.backgroundColor = "#C4C4C4";
    scissorplayer.style.padding = "10px";
    scissorplayer.style.borderRadius = "10px";
  }
  selectCPU();
  }
  

// Generate Computer Choice
function selectCPU() {
  c = Math.floor(Math.random() * 3);
  if (c === 0) {
    cpuFinal = "Rock";
    cpuRock.style.backgroundColor = "#C4C4C4";
    cpuRock.style.padding = "10px";
    cpuRock.style.borderRadius = "10px";
  }
  if (c === 1) {
    cpuFinal = "Paper";
    cpuPaper.style.backgroundColor = "#C4C4C4";
    cpuPaper.style.padding = "10px";
    cpuPaper.style.borderRadius = "10px";
  }
  if (c === 2) {
    cpuFinal = "Scissors";
    cpuScissors.style.backgroundColor = "#C4C4C4";
    cpuScissors.style.padding = "10px";
    cpuScissors.style.borderRadius = "10px";
  }
  playGame();
}

// Compare selections
function playGame() {
  // If Rock:
  if (playerFinal === "Rock" && cpuFinal === "Paper") {
    results.innerHTML = `<span class="winner">  Computer 
    <br>Win</span>`;
  }
  if (playerFinal === "Rock" && cpuFinal === "Scissors") {
    results.innerHTML = `<span class="winner">Player Win</span>`;
  }

  // If Paper:
  if (playerFinal === "Paper" && cpuFinal === "Rock") {
    results.innerHTML = `<span class="winner">Player Win</span>`;
  }
  if (playerFinal === "Paper" && cpuFinal === "Scissors") {
    results.innerHTML = `<span class="winner">  Computer 
    <br>Win</span>`;
  }

  // If Scissors:
  if (playerFinal === "Scissors" && cpuFinal === "Rock") {
    results.innerHTML = `<span class="winner"> Computer 
    <br>Win</span>`;
  }
  if (playerFinal === "Scissors" && cpuFinal === "Paper") {
    results.innerHTML = `<span class="winner">Player Win</span>`;
  }
  // If Tie:
  if (cpuFinal === playerFinal) {
    results.innerHTML = `<span class="draw">DRAW</span>`;
  }  

// Disable player options:
  playerRock.onclick = null;
  playerPaper.onclick = null;
  playerScissors.onclick = null;

}

//refresh function//
function reset() {
  results.innerHTML = "VS";
  cpuRock.style.backgroundColor = "transparent";
  cpuPaper.style.backgroundColor = "transparent";
  cpuScissors.style.backgroundColor = "transparent";
  rockplayer.style.backgroundColor = "transparent";
  paperplayer.style.backgroundColor = "transparent";
  scissorplayer.style.backgroundColor = "transparent";

  playerRock.onclick = function() {
    selectPlayer(0);
  };
  playerPaper.onclick = function() {
    selectPlayer(1);
  };
  playerScissors.onclick = function() {
    selectPlayer(2);
  };
  }