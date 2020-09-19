class Line{
    constructor(x,y,height,width){

    var opt = {
    isStatic: false,
    'friction':1.0,
    'density':1.0
}

        this.body = Bodies.rectangle(x,y,width,height,opt);

        this.height = height;
        this.width = width;
        World.add (world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill ("yellow")
        rect(pos.x,pos.y,this.width,this.height);

    }
}