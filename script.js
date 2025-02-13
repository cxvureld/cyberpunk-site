const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.zIndex = "-1"; 
canvas.style.pointerEvents = "none"; 

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setCanvasSize();


let particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 2 + 1;
    }

    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = "rgba(0, 255, 170, 0.8)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "cyan";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}


window.addEventListener("resize", () => {
    setCanvasSize();
    initParticles();
});


initParticles();
animateParticles();


const button = document.querySelector('.cta');

button.addEventListener('mouseenter', () => {
    button.classList.add('glitch');
});

button.addEventListener('mouseleave', () => {
    button.classList.remove('glitch');
});


button.addEventListener('click', () => {
    button.classList.add('glitch');
    setTimeout(() => {
        button.classList.remove('glitch');
    }, 500);
});



document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});