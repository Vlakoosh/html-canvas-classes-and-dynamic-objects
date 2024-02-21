const canvas = document.getElementById('canvas');

let context = canvas.getContext("2d");

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "whitesmoke";


class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
    }
}

const myCircle = new Circle(100,100, 50, "red");
myCircle.draw(context);

const myCircle2 = new Circle(150, 150, 10, "black");
myCircle2.draw(context);

let allCircles = [];

for (let i = 0; i < 100; i ++) {
    const xRandom = Math.random() * window_width;
    const yRandom = Math.random() * window_height;
    const circle = new Circle(xRandom, yRandom, 20, "black");
    allCircles.push(circle);
    drawCircle(allCircles[i]);
}

function drawCircle(circle) {
    circle.draw(context);
}