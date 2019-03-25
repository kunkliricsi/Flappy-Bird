class Pipe {
    constructor(y, w) {        
        this.Boxes = [ 
            new Box(width + 120, 0 - (height/2 - y) - w/2, 80, height, true), 
            new Box(width + 120, height - (height/2 - y) + w/2, 80, height, true),
            new Box(width + 120, y - w/2, 120, 50, true),
            new Box(width + 120, y + w/2, 120, 50, true), 
        ];
    }

    isOutOfBounds() {
        var out = true;
        this.Boxes.forEach((b) => {
            if (b.body.position.x >= -360) {
                out = false;
            }
        });

        return out;
    }

    draw() {
        if (this.isOutOfBounds()) {
            this.Boxes.forEach((b) => b.remove());
            pipes.splice(this, 1);
            return;
        }

        this.Boxes.forEach((b) => {
                b.move(-speed);
                b.draw();
        });
    }

    remove() {
        this.Boxes.forEach((b) => b.remove());
    }
}