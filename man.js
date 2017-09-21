//hangman object 
function Man() {
    this.strike = 0;
    this.update =  function() {
        
    }
    this.endGame = function() {
        console.log("game over");
    }
    this.getStrike = function() {
        return this.strike;
    }
    this.show = function() {
        switch(this.strike) {
            case 1: 
                fill(0);
                ellipse(450,275,50,50);
                break;
                
            case 2:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                break;
            case 3:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                break;
            case 4:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                break;
            case 5:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                line(450,400,475,450);
                break;
            case 6:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                line(450,400,475,450);
                line(450,400,425,450);
                break;
            case 7:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                line(450,400,475,450);
                line(450,400,425,450);
                ellipse(440,270,7,5);
                ellipse(460,270,7,5);
                break;
            case 8:
                fill(0);
                ellipse(450,275,50,50);
                line(450,300,450,400);
                line(450,325,475,350);
                line(450,325,425,350);
                line(450,400,475,450);
                line(450,400,425,450);
                ellipse(440,270,7,5);
                ellipse(460,270,7,5);
                line(445,285,455,290);
                line(445,290,455,285);
                break;
        }
    }
}

