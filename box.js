class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            density : 0.5,
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<3){
        push ();
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        pop ();
       }
       else{
        World.remove(world, this.body);
        push ();
        this.visibility = this.visibility-5;
        tint (255,this.visibility);
        pop ();  
       }
    }
}