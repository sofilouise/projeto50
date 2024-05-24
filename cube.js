class Cube{
   constructor(x, y, width, height){
     var options = {
        isStatic: true
     }
     
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, width, height, options);
     World.add(world, this.body);

   }

   display(){
    push();
    stroke("red");
    fill("red")
    rotate(this.body.angle)
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
}
}