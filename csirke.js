class Csirke {
    constructor(x, y, r) {
        const options = {

        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;


        World.add(world, this.body);
    }

    draw() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.r);
        pop();
    }

    jump() {
        Body.setVelocity(this.body, {x: 0, y: -10});
    }

    remove() {
        World.remove(world, this.body);
    }
}