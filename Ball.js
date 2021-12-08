class Ball {

    constructor(x, y){ 
        var options = {
            'density': 1.2,
            'friction': 0,
            'restitution':0.3,
            'isStatic':false
        }
        this.image = loadImage('paper.png')
        this.body = Bodies.circle(x, y, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        strokeWeight(2);
        stroke('black');
        fill('white');
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}
