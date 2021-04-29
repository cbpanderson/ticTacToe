//set up event listeners
var clickCount = 1;
var clickLocation = "";
var xWins = 0;
var yWins = 0;


    function getClickLocation(num){
      clickLocation = document.getElementById(num);
      writeLetter(clickLocation);
    }

  function writeLetter(location){
    if(location.className!=='played'){
      if (clickCount % 2 !==0){
        location.innerHTML = 'X';
        location.className += ' played';
        clickCount++;
      }       
      else {
      location.innerHTML = 'O';
      location.className += ' played';
      clickCount++;
      }
    }
  }

  function addWin(playerWins){
    document.getElementById(player+"Wins").innerHTML = playerWins;
  }


//start new game button resets everything
//when three letters in a row, print winner at top
//keep track of wins on right under statsticTacToe
  