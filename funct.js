// Variable declarations
let numSquare = 9;
let colors;
let pickedCol;

// Elements Selection
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let resetBtn = document.querySelector("#reset");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let modeButtons = document.querySelectorAll(".mode");

// Code body
init();

// Function declaration
function init() {
  // mode button event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", modeSel);
  }    
  
  for (let i = 0; i < squares.length; i++) {
    // color picker event listeners
    reset();
    squares[i].addEventListener("click", pickColSq);
  }
  colorDisplay.textContent = pickedCol;
  resetBtn.addEventListener("click", reset);
}

function pickColSq(){
    let clickedCol = this.style.backgroundColor;
    if(clickedCol === pickedCol){
        message.textContent = "Correct!";
        changeCol(clickedCol);
        h1.style.backgroundColor = clickedCol;
        resetBtn.textContent = "Play Again?";
    } else {
        message.textContent = "Try Again";
        this .style.backgroundColor = "#232323";
    }
}

function changeCol(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickCol(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandCol(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randCol());
    }
    return arr;
}

function randCol(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
  colors = genRandCol(numSquare);
  pickedCol = pickCol();
  colorDisplay.textContent = pickedCol;
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  resetBtn.textContent = "New Colors";
  for (let i = 0; i < squares.length; i++) {
      if(colors[i]){
          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display = "block";
      }else {
          squares[i].style.display = "none";
      }
  }
}

function modeSel(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    modeButtons[2].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent === "Easy"){
        numSquare = 3
    } else if(this.textContent === "Medium"){
        numSquare = 6
    } else {
        numSquare = 9
    }
    reset();
}