class Superhero{
    constructor(x, y, width, height){
        var options={
            isStatic=false,
            restitution:0.4,
            friction:1.0,

        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height= height;
        this.image=loadImage("images/Monster-01.png");
        World.add(world, this.body);
    
    display();

  /*  var angle=this.body.angle;
    var pos= this.body.position;*/

    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    rect(this.image,0,0,this.width,this.height);
    pop();
    }
}