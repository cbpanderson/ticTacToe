var clickCount = 1;
var XWins = 0;
var OWins = 0;
var currGame = ["","","","","","","","",""];
var currNum;


    function getClickLocation(num){
      currNum = num;
      clickLocation = document.getElementById(num);
      writeLetter(clickLocation);
    }

  function writeLetter(location){
    if(location.className === "gameBoxIndiv played"){
      alert("Choose an open square.");
    }
    else{
      if (clickCount % 2 !== 0){
        location.innerHTML = 'X';
        location.className += ' played';
        clickCount++;
        storeScore('X');
      }       
      else {
      location.innerHTML = 'O';
      location.className += ' played';
      clickCount++;
      storeScore('O');
      }
    }
  }

  function storeScore(letter){
    currGame[currNum] = letter;
    var playerWhoWon = checkForWin();
    if(playerWhoWon){
      addWinToScoreboard(playerWhoWon);
    }
  }

  function checkForWin(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (currGame[a] && currGame[a] === currGame[b] && currGame[a] === currGame[c]) {
        document.getElementById("winMessage").innerHTML = 'Winner!';//add styling
        if (currGame[a] === 'X'){
          XWins++;
        }
        else if(currGame[a] === 'O'){
          OWins++;
        }
        
        return currGame[a];
      }
    }
    return null;
  }

function addWinToScoreboard(player){
  var playerScore = "";
  if (player === 'X'){
    playerScore = XWins;
  }
  else if(player === 'O'){
    playerScore = OWins;
  }
  document.getElementById(`${player}Wins`).innerHTML = "Player "+player+": "+playerScore;
}

  function clearBoard(){
    currGame = ["","","","","","","","",""];
    var i=0;
    while (i <= 8){
      var currDiv = document.getElementById(i); 
      currDiv.innerHTML = "";
      currDiv.className = "gameBoxIndiv";
      i++;
    }
    document.getElementById("winMessage").innerHTML = "";
  }