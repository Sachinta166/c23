class Box{
    constructor(x,y,width,height){
        var options =  {
            restitution : 1
        }
        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
    }


    display(){
        var pos = this.body.position
        var angle=this.body.angle
        push()
        translate (pos.x,pos.y)
        rotate(angle)
        //rectMode(CENTRE)
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop()
    }
}