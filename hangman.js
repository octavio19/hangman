var man;
var pad;
var cols = 13;
var rows = 2;
var w = 50;
var grid = [];

function setup(){
    createCanvas(800,800);
    for(var j = 0; j < rows;j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i,j);
            cell.determineLetter();
            grid.push(cell);
        }
    }
    man = new Man();

}
function draw() {
    background(0);
    stroke(255);
    //console.log("im showing");
    for(var i = 0; i < grid.length;i++){
        grid[i].show();
    }
    line(550,500,700,500);
    line(625,500,625,200);
    line(450,200,625,200);
    line(450,200,450,275);
    man.update();
    man.show();
    fill(255);
    textSize(32);
    text("Strikes:",550,550);
    text(man.getStrike(),675,550)
    
    
}

function keyPressed(){
// implement binary search but just loop through once to get functionality going.
    for(var i = 0; i < grid.length;i++){
        if(keyCode == grid[i].getKey()){
            grid[i].selected = true;
            console.log("pressed inside");
        }   
    }
}



