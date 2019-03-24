class Box {
    constructor(x, y, w, h) {
        const options = {

        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

        World.add(world, this.body);
    }

    draw() {
        
    }
}