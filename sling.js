class SlingShot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.002,
            length: 10
        }
        this.pointB=point2;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly()
    {
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("cyan");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    
}