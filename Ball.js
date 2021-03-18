class Ball{

    constructor(x,y,r){
            var options={

                'restitution': 1,
                'density': 0.8,
                'friction': 2,
                'frictionAir': 0.009
            }

        this.r = r;
        this.body = Bodies.circle(x,y, this.r, options);
        World.add(world, this.body);
        
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r, this.r);
        pop();




    }

}

