export class vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distanceTo(target: vector2) {
        return Math.abs(target.x - this.x + target.y - this.y);
    }

    reverse() {
        this.x *= -1;
        this.y *= -1;
    }
}