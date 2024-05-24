class Ball{
    constructor(x , y, radius){
       var options = {
         restitution: 1.1
       }
       this.radius = radius;
       this.body = Bodies.circle(x, y, radius, options);
       World.add(world, this.body);
    }

    display(){
        push();
        stroke("red");
        fill("red");
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
}