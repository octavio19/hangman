var man;
function setup(){
    createCanvas(800,800);
    man = new Hangman();
    
    

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
    
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        man.strike += 1;
    }
}

function Hangman(){
    this.strike = 0;
    //if a letter is guessed wrong strike counter is incremented and show function is also updated
    this.update =  function(){
        
    }
    this.show = function(){
        switch(this.strike){
            case 1:
                ellipse(450,275,50,50);
                break;
                
            case 2:
                ellipse(450,275,50,50);
                line(450,300,450,400);
                break;
            case 3:
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                break;
            case 4:
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                break;
            case 5:
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                line(450,400,475,450);
                break;
            case 6:
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                line(450,400,475,450);
                line(450,400,425,450);
                break;
        }
    }
}

