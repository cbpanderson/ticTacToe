var clickCount = 1;
var xWins = 0;
var oWins = 0;
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
    // checkForWin();
  }

  function checkForWin(){
    // const lines = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6],
    // ];



    // //if winner:
    // document.getElementById(winMessage).innerHTML = 'Winner!';
    // //who won
    // var playerWhoWon = "";
    // addWinToScoreboard(playerWhoWon);

  }

  //add to this
  // function addWinToScoreboard(player){

  //   document.getElementById(player+"Wins").innerHTML = "Player "+player+":"+`{player}+"Wins"`;
  // }

  function clearBoard(){
    currGame = ["","","","","","","","",""];
    var i=1;
    while (i <= 9){
      var currDiv = document.getElementById(i); 
      currDiv.innerHTML = "";
      currDiv.className = "gameBoxIndiv";
      i++;
    }
  }