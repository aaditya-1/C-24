class Paper{
    constructor(x,y){

        var opt1 = {
            restitution :0.8,
            // 'isStatic':false,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,100,opt1);
        World.add(world,this.body);
 }
display(){
    var pos1 = this.body.position;
    circle(pos1.x,pos1.y,50,50);
    
}
}
