//set up event listeners
var clickCount = 0;
function bind_listeners () {
    // var form = document.querySelector("form");
    // form.addEventListener("submit", start_timer);
  
    var xClick = document.querySelector("div.gameBoxIndiv");
    xClick.addEventListener("click", writeLetter);
  }


  function writeLetter(event){
    clickCount++;
    if (clickCount % 2 !==0){
        if(event.target.classList.contains('gameBoxIndiv')){
            event.target.innerText = 'X';
          }
        else {
            if(event.target.classList.contains('gameBoxIndiv')){
                event.target.innerText = 'O';
              }
        }
    }
  }

//count the clicks
//first click places an X
//second click places an O
//start new game button resets everything
//when three letters in a row, print winner at top
//keep track of wins on right under statsticTacToe
  
  document.addEventListener("DOMContentLoaded", (event) => {
    bind_listeners();
  });