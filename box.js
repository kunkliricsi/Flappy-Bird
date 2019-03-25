class Box {
    constructor(x, y, w, h, isStatic = false) {
        const options = {
            isStatic: isStatic,
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

        World.add(world, this.body);
    }

    draw() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop(); 
    }

    move(x) {
        Body.translate(this.body, {x: x, y: 0});
    }

    remove() {
        World.remove(world, this.body);
    }
}