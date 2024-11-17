let homeScore = document.getElementById("a2")
let awayScore = document.getElementById("a22")
let hs = 0
let as = 0

function HincreseOne(){
	hs += 1
	homeScore.textContent  = hs
}


function HincreseTwo(){
	hs += 2
	homeScore.textContent  = hs
}


function HincreseThree(){
	hs += 3
	homeScore.textContent  = hs
}


function AincreseOne(){
	as += 1
	awayScore.textContent  = as
}


function AincreseTwo(){
	as += 2
	awayScore.textContent  = as
}


function AincreseThree(){
	as += 3
	awayScore.textContent  = as
}


function stopGame() {
  let resultText = '';
  if (hs > as) {
    resultText = 'Home Team wins';
  } else if (hs < as) {
    resultText = 'Away Team wins';
  } else {
    resultText = 'It\'s a tie';
  }
  document.getElementById("newG2").innerText = resultText;
}


function newGame() {
  hs = 0;
  as = 0;
  homeScore.textContent = 0;
  awayScore.textContent = 0;
  document.getElementById("newG2").innerText = 'Stop Game';
}
