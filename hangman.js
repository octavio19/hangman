var man;
function setup(){
    createCanvas(800,800);
    man = new Man();

}
function draw() {
    background(0);
    stroke(255);
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
    if(keyCode === UP_ARROW){
        if(man.strike >= 8){
            man.strike += 1;
            man.endGame();
        }else {
        man.strike += 1;
        }
    }
}


