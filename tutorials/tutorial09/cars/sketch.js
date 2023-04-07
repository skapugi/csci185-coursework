const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

class Car {

    constructor(xInput, yInput, widthInput, speedInput, colorInput) {
        this.x = xInput;
        this.y = yInput;
        this.width = widthInput;
        this.speed = speedInput;
        this.color = colorInput;
    }

    draw() { 
        strokeWeight(0);
    
        // body
        fill(this.color);
        rect(this.x - this.width/4, this.y - (this.width/5 + this.width/7), this.width / 2, this.width/7); // top
        rect(this.x - this.width/2, this.y - this.width/5, this.width, this.width/5); // bottom
    
        // wheels:
        fill("black");
        circle(this.x - this.width / 4, this.y, this.width / 6);
        circle(this.x + this.width / 4, this.y, this.width / 6);
    }

    drive() {
        this.x += this.speed;
        if(this.x > canvasWidth + 100) this.x = -100;
        else if (this.x < -110) this.x = 1500;
    }

}

const c1 = new Car(100, 100, 200, 2, "hotpink");
const c2 = new Car(1300, 300, 200, -2, "green");


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car and redraw it:
    c1.drive();
    c1.draw();

    // move the car and redraw it
    c2.drive();
    c2.draw();
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}
