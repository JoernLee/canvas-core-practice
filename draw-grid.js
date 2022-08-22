const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function drawGrid(context, color, stepX, stepY) {
    // 利用线段与像素边界的关系，需要辅助0.5的默认距离 - 抗锯齿效果
    context.strokeStyle = color;
    context.lineWidth = 0.5;

    for (let i = stepX + 0.5; i < context.canvas.width; i += stepX) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }
    for (let i = stepY + 0.5; i < context.canvas.height; i += stepY) {
        context.beginPath();
        context.moveTo(0,i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }
}

drawGrid(context, 'lightgray', 10, 10);