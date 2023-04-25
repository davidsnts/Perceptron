class Point {
    x = 0; 
    y = 0; 
    label = 0;

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.label = this.getLabel();
    }

    getLabel(){
        if(this.x > this.y){
            return 1;
        }else{
            return -1;
        }
    }

    getPixelX(){
        const px = map(this.x, -1, 1, 0,this.width);
        return px;
    }
    getPixelY(){
        const py = map(this.y, -1, 1,this.height, 0);
        return py;
    }

}