class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        //added a property pointB
        this.pointB = pointB;
        World.add(world, this.sling);
        
    }

    //to empty bodyA
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //to draw a line only when there is a bodyA inside this.sling
        if(this.sling.bodyA){
            //namespaced bodyA's position
            var pointA = this.sling.bodyA.position;
            //namespaced pointB property
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
                
    }
    

}