const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

const startDrawing = (e) => {
    drawing = true;
    ctx.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
};

const draw = (e) => {
    if(!drawing) return;
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
};

const stopDrawing = (e) => {
    drawing = false;
    ctx.closePath();
}

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);