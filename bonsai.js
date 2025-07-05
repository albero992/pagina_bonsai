// Animación simple de un árbol con hojas que caen usando canvas

const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Dibujar el árbol
function drawTree() {
    ctx.save();
    // Tronco
    ctx.fillStyle = '#8B5A2B';
    ctx.fillRect(280, 200, 40, 150);
    // Copa
    ctx.beginPath();
    ctx.arc(300, 180, 70, 0, Math.PI * 2);
    ctx.fillStyle = '#228B22';
    ctx.fill();
    ctx.restore();
}

// Hoja individual
class Leaf {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = 260 + Math.random() * 80;
        this.y = 140 + Math.random() * 60;
        this.radius = 6 + Math.random() * 4;
        this.color = `rgb(34,139,34,${0.7 + Math.random() * 0.3})`;
        this.speedY = 1 + Math.random() * 1.5;
        this.speedX = -0.5 + Math.random();
        this.angle = Math.random() * Math.PI * 2;
        this.spin = -0.02 + Math.random() * 0.04;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spin;
        if (this.y > canvas.height) this.reset();
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, this.radius, this.radius / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

// Crear hojas
const leaves = [];
for (let i = 0; i < 25; i++) {
    leaves.push(new Leaf());
}

// Animación
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTree();
    leaves.forEach(leaf => {
        leaf.update();
        leaf.draw(ctx);
    });
    requestAnimationFrame(animate);
}

animate();