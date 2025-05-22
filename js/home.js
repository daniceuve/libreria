window.addEventListener('load', () => {
    const button = document.getElementById('heroButton');
    const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = button.offsetWidth + 40;
    canvas.height = button.offsetHeight + 40;

    const buttonRect = button.getBoundingClientRect();
    const heroContentRect = button.parentElement.getBoundingClientRect();
    canvas.style.top = `${buttonRect.top - heroContentRect.top - 20}px`;
    canvas.style.left = `${buttonRect.left - heroContentRect.left - 20}px`;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 10;
    let angle = 0;
    const speed = 0.05;

    function drawAnimatedCircle() {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, angle);
        ctx.strokeStyle = '#FF746C';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();

        angle += speed;

        if (angle < Math.PI * 2) {
            requestAnimationFrame(drawAnimatedCircle);
        } else {
            setTimeout(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }, 1000);
        }
    }

    // Inicia la animación
    drawAnimatedCircle();
});

