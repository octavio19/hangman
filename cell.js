function Cell(i,j) {
    this.i = i;
    this.j = j;
    this.letter = '';
    this.key;
    this.selected = false;
    
    this.show = function(){
        var x = this.i * w + w;
        var y = this.j * w + w;
        stroke(255);
        textSize(32);
        fill(255);
        text(this.getLetter(),x + 15,y + 40)
        if (this.selected){
            fill(255,0,0);
            text("X",x + 15,y + 40);
        }
        noFill(0);
        rect(x,y,w,w);
    }
        
    this.getLetter = function(){
        return this.letter;
    }
    
    this.getKey = function(){
        return this.key;
        console.log("pressed");
    }
    
    this.determineLetter = function(){
        switch(this.j){
            case 0:
                if (this.i == 0){
                    this.letter = 'A';
                    this.key = 65;
                    break;
                } else if (this.i == 1){
                    this.letter = 'B';
                    this.key = 66;
                    break;          
                } else if (this.i == 2){
                    this.letter = 'C';
                    this.key = 67;
                    break;          
                } else if (this.i == 3){
                    this.letter = 'D';
                    this.key = 68;
                    break;          
                } else if (this.i == 4){
                    this.letter = 'E';
                    this.key = 69;
                    break;          
                } else if (this.i == 5){
                    this.letter = 'F';
                    this.key = 70;
                    break;          
                } else if (this.i == 6){
                    this.letter = 'G';
                    this.key = 71;
                    break;          
                } else if (this.i == 7){
                    this.letter = 'H';
                    this.key = 72;
                    break;          
                } else if (this.i == 8){
                    this.letter = 'I';
                    this.key = 73;
                    break;          
                } else if (this.i == 9){
                    this.letter = 'J';
                    this.key = 74;
                    break;          
                } else if (this.i == 10){
                    this.letter = 'K';
                    this.key = 75;
                    break;          
                } else if (this.i == 11){
                    this.letter = 'L';
                    this.key = 76;
                    break;          
                } else {
                    this.letter = 'M';
                    this.key = 77;
                    break;          
                }
                break;
            case 1:
                if (this.i == 0){
                    this.letter = 'N';
                    this.key = 78;
                    break;
                } else if (this.i == 1){
                    this.letter = 'O';
                    this.key = 79;
                    break;          
                } else if (this.i == 2){
                    this.letter = 'P';
                    this.key = 80;
                    break;          
                } else if (this.i == 3){
                    this.letter = 'Q';
                    this.key = 81;
                    break;          
                } else if (this.i == 4){
                    this.letter = 'R';
                    this.key = 82;
                    break;          
                } else if (this.i == 5){
                    this.letter = 'S';
                    this.key = 83;
                    break;          
                } else if (this.i == 6){
                    this.letter = 'T';
                    this.key = 84;
                    break;          
                } else if (this.i == 7){
                    this.letter = 'U';
                    this.key = 85;
                    break;          
                } else if (this.i == 8){
                    this.letter = 'V';
                    this.key = 86;
                    break;          
                } else if (this.i == 9){
                    this.letter = 'W';
                    this.key = 87;
                    break;          
                } else if (this.i == 10){
                    this.letter = 'X';
                    this.key = 88;
                    break;          
                } else if (this.i == 11){
                    this.letter = 'Y';
                    this.key = 89;
                    break;          
                } else {
                    this.letter = 'Z';
                    this.key = 90;
                    break;          
                }
                break;
        } 
    }
    
}