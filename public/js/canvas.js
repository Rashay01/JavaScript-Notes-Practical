const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// rectangle
context.fillStyle = 'blue';
context.fillRect(50, 50, 150, 100);

// stroke
context.strokeStyle = 'red';
context.strokeRect(200, 50, 150, 100);

// circle
context.beginPath();
context.arc(150, 250, 50, 0, 2*Math.PI);
context.fillStyle = 'green';
context.fill();

// line
context.beginPath();
context.moveTo(50, 400);
context.lineTo(300, 500);
context.strokeStyle = 'black';
context.lineWidth = 5;
context.stroke();

// text
context.font = '30px Arial';
context.fillStyle = 'orange';
context.fillText('Hello Canvas', 400, 100)

context.strokeStyle = 'blue';
context.strokeText('Hello Canvas', 400, 150);

// gradient
const gradient = context.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0.2, 'red');
gradient.addColorStop(0.4, 'blue');
gradient.addColorStop(0.8, 'green');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.fillRect(50, 500, 200, 100);