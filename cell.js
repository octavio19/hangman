function Cell(i,j) {
    this.i = i;
    this.j = j;
    this.letter;
    
    this.show = function(){
        var x = this.i * w + w;
        var y = this.j * w + w;
        stroke(255);
        noFill(0);
        rect(x,y,w,w);
    
    }
}