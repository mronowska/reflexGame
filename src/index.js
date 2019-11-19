const clock = document.getElementById('time');
const life = document.getElementById('lives');
const score = document.getElementById('scores');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const squares = document.getElementById('squares');
let squareElement = document.getElementsByClassName('square');

const sec = 1000;
const maxSec = 10; //ZWIĘKSZYĆ DO ^)60!!!!!!
let idTimeInterval, time, changeSquareTime;

//random ID of the square
let randomID;

//Parameter for selecting the number of squares: numberOfSquares
const numberOfSquares = 5;



//set init values
const setInitValues = () => {
    life.innerHTML = 3;
    score.innerHTML = 0;
    time = maxSec+1;
    changeSquareTime = 0;
}


//create squares
const createSquares = (numberOfSquares) => {
    for (let i=0; i < (numberOfSquares); i++) {
        const square = document.createElement('div');
        square.classList = "square";
        squares.appendChild(square);
    }   
}


//draw random square ID
let drawRandomID = function (numberOfSquares) {
    let randomSquareId = Math.floor(Math.random()*numberOfSquares); 
    selectSquare(document.getElementsByClassName('square')[randomSquareId], randomSquareId);
    return randomSquareId;
}


function clickSqare(e) {
    let timesClicked = 0;
    for( let i = 0; i < squareElement.length; i++ ) {
        squareElement[i].onclick = function () {
            if((this.className == "square selectedSquare") && timesClicked===0) {
                addPoint();
                timesClicked++;
            } else {
                loseLife();
            }
      }
    }
  }


//setting time

const countDown = () => {
    time--;
    if (time < 1) {
        stopCountDown();
    }
    clock.innerHTML = time;
}

const stopCountDown = function() {
    time = 0;
    clearInterval(idTimeInterval);
}

const stopCountchangeSquareTime = function() {
    changeSquareTime = 0;
    clearInterval(idchangeSquareTimeInterval);
}//setting time to change the color of the square
const countChangeSquareTime = function () {
    if (changeSquareTime % 3 == 0 && changeSquareTime != maxSec) {
        randomID = drawRandomID(numberOfSquares);
        clickSqare();
    } else if (changeSquareTime % 3 == 2 && changeSquareTime != maxSec){
        ucheckSquare(document.getElementsByClassName('square')[randomID], randomID);
    } else if (changeSquareTime == maxSec) {
        endGame();
    }
    changeSquareTime++;
}


//change class of the square
const selectSquare = function(square, i) {
    document.getElementsByClassName("square")[i].classList.add("selectedSquare");  
}

const ucheckSquare = function(square, i) {
    document.getElementsByClassName("square")[i].classList.remove("selectedSquare");
}


const addPoint = function () {
    squareElement[randomID].removeEventListener('click', addPoint);
    score.innerHTML++;
}

const loseLife = function () {
    life.innerHTML--;
    alert("STRACIŁEŚ ŻYCIE");
    if (life.innerHTML == 0 ) { 
        endGame();
    }
}

const startGame = function () {
    createSquares(numberOfSquares);
    setInitValues();
    countDown();
    countChangeSquareTime();
   
    idTimeInterval = setInterval(countDown, sec);
    idchangeSquareTimeInterval = setInterval(countChangeSquareTime, sec);
    start.removeEventListener('click', startGame);   
}

const resetGame = function () {
    stopCountDown();
    stopCountchangeSquareTime();
    for (let i=0; i < numberOfSquares; i++) {
        ucheckSquare(document.getElementsByClassName('square')[i], i);
    }
    window.location.reload();
}

const endGame = function () {
    stopCountDown();
    stopCountchangeSquareTime();
    squares.style.display = "none";
    document.getElementById('endGameAlert').style.display = "block";
}

//Set initial values after Page load 
window.addEventListener('load', setInitValues);

//Click on Reset button calls resetGame function
reset.addEventListener('click', resetGame);

//Click on Start button calls startGame function
start.addEventListener('click', startGame);


 
