var colors = [];
var mode = 6;
var pickedColor;
var pickedColorDisplay = document.querySelector("#colorCodeDisplay");
var squares = document.querySelectorAll(".square");
var reset = document.querySelector("#resetButton");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var msg = document.querySelector("#displayMsg");

reset.addEventListener("click", init);
easy.addEventListener("click", function() {
    mode = 3;
    for(var i=3;i<6;i++) {
        squares[i].style.display = "none";
    }
    this.classList.add("selected");
    hard.classList.remove("selected");
    init();
});
hard.addEventListener("click", function() {
    mode = 6;
    for(var i=3;i<6;i++) {
        squares[i].style.display = "block";
    }
    this.classList.add("selected");
    easy.classList.remove("selected");
    init();
});


init();

function init() {
    for(var i=0;i<mode;i++) {
        colors[i] = generateColor();
    }
    pickedColor = pickColor();
    pickedColorDisplay.textContent = colors[pickedColor];
    for(var i=0;i<mode;i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    msg.textContent = " ";
    reset.textContent = "New Colors";
}

function generateColor() {
    return "rgb(" + Math.floor(Math.random()*255+1) + ", " + Math.floor(Math.random()*255+1) + ", " + Math.floor(Math.random()*255+1) + ")";
}

function pickColor() {
    return Math.floor(Math.random()*mode);
}

for(var i=0;i<6;i++) {
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if(colors[pickedColor] === clickedColor) {
            for(var i=0;i<mode;i++) {
                squares[i].style.background = clickedColor;
            }
            h1.style.background = clickedColor;
            reset.textContent = "Play Again?";
            msg.textContent = "Well Done!"
            msg.style.fontWeight ="bold";
            msg.style.color = "#232323";
        }
        else {
            this.style.background = "#232323";
            msg.textContent = "Try again!"
            msg.style.fontWeight ="bold";
            msg.style.color = "#232323";
        }
    })
}