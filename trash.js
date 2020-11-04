class Trash{
    constructor(x,y,radius,options){
        var options={
            isStatic:false,
            friction:1.0,
            restitution:0.3,
            density:0

        }
            this.body=Bodies.circle(x,y,radius,options);
            this.radius=radius;

            Trash.color("white");
        World.add(world , this.body);
    }
        display(){
            var radius = this.body.radius;
            push();
            translate(this.body.x,this.body.y);
            pop();

            

        }


}